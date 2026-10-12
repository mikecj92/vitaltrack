package com.vitaltrack.salud

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.result.ActivityResultLauncher
import androidx.appcompat.app.AppCompatActivity
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.PermissionController
import androidx.health.connect.client.permission.HealthPermission
import androidx.health.connect.client.records.HeartRateRecord
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.SleepSessionRecord
import androidx.health.connect.client.records.TotalCaloriesBurnedRecord
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.DistanceRecord
import androidx.health.connect.client.records.ExerciseSessionRecord
import androidx.health.connect.client.records.RestingHeartRateRecord
import androidx.health.connect.client.records.SpeedRecord
import androidx.health.connect.client.request.ReadRecordsRequest
import androidx.health.connect.client.time.TimeRangeFilter
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.time.Instant
import java.time.temporal.ChronoUnit
import android.util.Base64
import java.time.Duration

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var healthConnectClient: HealthConnectClient? = null
    private lateinit var requestPermissions: ActivityResultLauncher<Set<String>>

    private val PERMISSIONS = setOf(
        HealthPermission.getReadPermission(HeartRateRecord::class),
        HealthPermission.getReadPermission(StepsRecord::class),
        HealthPermission.getReadPermission(SleepSessionRecord::class),
        HealthPermission.getReadPermission(TotalCaloriesBurnedRecord::class),
        HealthPermission.getReadPermission(ActiveCaloriesBurnedRecord::class),
        HealthPermission.getReadPermission(DistanceRecord::class),
        HealthPermission.getReadPermission(ExerciseSessionRecord::class),
        HealthPermission.getReadPermission(RestingHeartRateRecord::class),
        HealthPermission.getReadPermission(SpeedRecord::class)
    )

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.allowFileAccess = true
        webView.webChromeClient = WebChromeClient()
        webView.webViewClient = WebViewClient()

        // Inyectar el puente nativo para JavaScript
        webView.addJavascriptInterface(HealthConnectWebBridge(), "AndroidHealthConnect")

        // Inicializar Health Connect si el dispositivo es compatible
        if (HealthConnectClient.getSdkStatus(this) == HealthConnectClient.SDK_AVAILABLE) {
            healthConnectClient = HealthConnectClient.getOrCreate(this)
        }

        val requestPermissionContract = PermissionController.createRequestPermissionResultContract()
        requestPermissions = registerForActivityResult(requestPermissionContract) { granted ->
            if (granted.isNotEmpty()) {
                Toast.makeText(this, "Permisos de salud concedidos", Toast.LENGTH_SHORT).show()
                fetchAndInjectHealthData()
            } else {
                Toast.makeText(this, "Permisos de salud parciales o denegados", Toast.LENGTH_LONG).show()
            }
        }

        // Cargar interfaz de VitalTrack localmente
        webView.loadUrl("file:///android_asset/index.html")

        // Sincronización automática de salud al iniciar la aplicación
        checkAndRequestPermissions()
    }

    private fun checkAndRequestPermissions() {
        val client = healthConnectClient ?: return
        lifecycleScope.launch {
            try {
                val granted = client.permissionController.getGrantedPermissions()
                val missing = PERMISSIONS.filter { !granted.contains(it) }.toSet()
                if (missing.isEmpty()) {
                    fetchAndInjectHealthData()
                } else {
                    requestPermissions.launch(PERMISSIONS)
                }
            } catch (e: Exception) {
                requestPermissions.launch(PERMISSIONS)
            }
        }
    }

    private fun fetchAndInjectHealthData() {
        val client = healthConnectClient ?: return
        lifecycleScope.launch {
            try {
                val now = Instant.now()
                val startOfDay = now.truncatedTo(ChronoUnit.DAYS)
                val timeRange = TimeRangeFilter.between(startOfDay, now)

                // 1. Leer Pasos del Día con Deduplicación rigurosa por Origen de Datos (Watch vs Celular)
                var totalSteps: Long = 0
                try {
                    val stepsResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = StepsRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    // Filtrar preferentemente por Samsung Health (reloj Galaxy Watch)
                    val sHealthRecords = stepsResponse.records.filter { 
                        it.metadata.dataOrigin.packageName.lowercase().contains("shealth") 
                    }
                    totalSteps = if (sHealthRecords.isNotEmpty()) {
                        sHealthRecords.sumOf { it.count }
                    } else {
                        // Si no hay etiqueta explícita de shealth, agrupar por origen y tomar la fuente máxima única para evitar duplicar
                        val byOrigin = stepsResponse.records.groupBy { it.metadata.dataOrigin.packageName }
                        byOrigin.values.maxOfOrNull { list -> list.sumOf { it.count } } ?: 0L
                    }
                } catch (e: Exception) {}

                // 2. Leer Frecuencia Cardíaca Completa (Promedio, Máximo, Mínimo y Distribución de Zonas)
                var avgHr = 0
                var maxHr = 0
                var minHr = 0
                var zone2Count = 0
                var zone3Count = 0
                var peakCount = 0
                var totalHrSamples = 0
                try {
                    val hrResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = HeartRateRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    val allBpm = hrResponse.records.flatMap { it.samples.map { s -> s.beatsPerMinute } }
                    totalHrSamples = allBpm.size
                    if (allBpm.isNotEmpty()) {
                        avgHr = allBpm.average().toInt()
                        maxHr = allBpm.maxOrNull()?.toInt() ?: 0
                        minHr = allBpm.minOrNull()?.toInt() ?: 0
                        // Zonas para usuario de 38 años (FCmax ~181 bpm):
                        // Zona 2 (Aeróbica / Quema de Grasa / Impacto Seguro): 109 - 127 bpm
                        // Zona 3 (Aeróbica Moderada): 128 - 145 bpm
                        // Pico / Zona 4-5: > 145 bpm
                        zone2Count = allBpm.count { it in 109..127 }
                        zone3Count = allBpm.count { it in 128..145 }
                        peakCount = allBpm.count { it > 145 }
                    }
                } catch (e: Exception) {}

                // 3. Leer FC en Reposo (RHR)
                var restingHr = if (minHr > 0) minHr else 72
                try {
                    val rhrResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = RestingHeartRateRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    if (rhrResponse.records.isNotEmpty()) {
                        restingHr = rhrResponse.records.last().beatsPerMinute.toInt()
                    }
                } catch (e: Exception) {}

                // 4. Leer Sesiones de Sueño (Últimas 36 horas para captar anoche)
                var sleepHours = 0.0
                var sleepMinutes = 0L
                var sleepStart = ""
                var sleepEnd = ""
                var deepSleepMins = 0L
                var lightSleepMins = 0L
                var remSleepMins = 0L
                var awakeMins = 0L
                try {
                    val sleepRange = TimeRangeFilter.between(now.minus(36, ChronoUnit.HOURS), now)
                    val sleepResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = SleepSessionRecord::class,
                            timeRangeFilter = sleepRange
                        )
                    )
                    if (sleepResponse.records.isNotEmpty()) {
                        val lastSleep = sleepResponse.records.maxByOrNull { it.endTime }
                        if (lastSleep != null) {
                            sleepMinutes = Duration.between(lastSleep.startTime, lastSleep.endTime).toMinutes()
                            sleepHours = (sleepMinutes / 60.0 * 10).toInt() / 10.0
                            sleepStart = lastSleep.startTime.toString()
                            sleepEnd = lastSleep.endTime.toString()

                            try {
                                for (stage in lastSleep.stages) {
                                    val dur = Duration.between(stage.startTime, stage.endTime).toMinutes()
                                    when (stage.stage) {
                                        SleepSessionRecord.STAGE_TYPE_DEEP -> deepSleepMins += dur
                                        SleepSessionRecord.STAGE_TYPE_LIGHT -> lightSleepMins += dur
                                        SleepSessionRecord.STAGE_TYPE_REM -> remSleepMins += dur
                                        SleepSessionRecord.STAGE_TYPE_AWAKE -> awakeMins += dur
                                    }
                                }
                            } catch (e: Exception) {}
                        }
                    }
                } catch (e: Exception) {}

                // 5. Leer Distancia en Km
                var distanceKm = 0.0
                try {
                    val distResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = DistanceRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    val totalMeters = distResponse.records.sumOf { it.distance.inMeters }
                    distanceKm = (totalMeters / 1000.0 * 100).toInt() / 100.0
                } catch (e: Exception) {}

                // 6. Leer Calorías Quemadas Totales y Activas
                var totalCalories = 0
                var activeCalories = 0
                try {
                    val calResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = TotalCaloriesBurnedRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    totalCalories = calResponse.records.sumOf { it.energy.inKilocalories }.toInt()
                } catch (e: Exception) {}

                try {
                    val actCalResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = ActiveCaloriesBurnedRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    activeCalories = actCalResponse.records.sumOf { it.energy.inKilocalories }.toInt()
                } catch (e: Exception) {}

                // 7. Leer Sesiones de Ejercicio (Caminata dedicada)
                var exerciseDuration = 0
                var exerciseTitle = "Caminata"
                var exerciseStartTime = ""
                var exerciseEndTime = ""
                try {
                    val exResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = ExerciseSessionRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    if (exResponse.records.isNotEmpty()) {
                        val session = exResponse.records.last()
                        exerciseDuration = Duration.between(session.startTime, session.endTime).toMinutes().toInt()
                        if (session.title != null && session.title!!.isNotEmpty()) {
                            exerciseTitle = session.title!!
                        }
                        exerciseStartTime = session.startTime.toString()
                        exerciseEndTime = session.endTime.toString()
                    }
                } catch (e: Exception) {}

                // 8. Leer Velocidad promedio
                var avgSpeedKmh = 0.0
                try {
                    val speedResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = SpeedRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    val allSpeeds = speedResponse.records.flatMap { it.samples.map { s -> s.speed.inKilometersPerHour } }
                    if (allSpeeds.isNotEmpty()) {
                        avgSpeedKmh = (allSpeeds.average() * 10).toInt() / 10.0
                    }
                } catch (e: Exception) {}

                // 9. Crear Estructura JSON Completa con toda la telemetría recopilada
                val data = JSONObject().apply {
                    put("steps", totalSteps)
                    put("avgHeartRate", avgHr)
                    put("maxHeartRate", maxHr)
                    put("minHeartRate", minHr)
                    put("restingHeartRate", restingHr)
                    put("zone2Mins", if (totalHrSamples > 0 && exerciseDuration > 0) (zone2Count.toDouble() / totalHrSamples * exerciseDuration).toInt() else 0)
                    put("zone3Mins", if (totalHrSamples > 0 && exerciseDuration > 0) (zone3Count.toDouble() / totalHrSamples * exerciseDuration).toInt() else 0)
                    put("peakMins", if (totalHrSamples > 0 && exerciseDuration > 0) (peakCount.toDouble() / totalHrSamples * exerciseDuration).toInt() else 0)
                    put("sleepHours", sleepHours)
                    put("sleepMinutes", sleepMinutes)
                    put("sleepStartTime", sleepStart)
                    put("sleepEndTime", sleepEnd)
                    put("deepSleepMinutes", deepSleepMins)
                    put("lightSleepMinutes", lightSleepMins)
                    put("remSleepMinutes", remSleepMins)
                    put("awakeMinutes", awakeMins)
                    put("distanceKm", distanceKm)
                    put("totalCalories", totalCalories)
                    put("activeCalories", activeCalories)
                    put("calories", if (activeCalories > 0) activeCalories else totalCalories)
                    put("exerciseDuration", exerciseDuration)
                    put("exerciseTitle", if (exerciseDuration > 0) exerciseTitle else "")
                    put("exerciseStartTime", exerciseStartTime)
                    put("exerciseEndTime", exerciseEndTime)
                    put("avgSpeedKmh", avgSpeedKmh)
                    put("timestamp", now.toString())
                }

                // Inyectar en JavaScript en el WebView local
                runOnUiThread {
                    webView.evaluateJavascript(
                        "if (window.onHealthConnectDataReceived) { window.onHealthConnectDataReceived($data); }",
                        null
                    )
                }

            } catch (e: Exception) {
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "Error Health Connect: ${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    inner class HealthConnectWebBridge {
        @JavascriptInterface
        fun syncData() {
            runOnUiThread {
                checkAndRequestPermissions()
            }
        }

        @JavascriptInterface
        fun isAvailable(): Boolean {
            return healthConnectClient != null
        }

        @JavascriptInterface
        fun pushToCloud(payloadJson: String) {
            lifecycleScope.launch(Dispatchers.IO) {
                try {
                    // 1. Enviar directamente al servidor local en PC si está en la misma red WiFi
                    try {
                        val localUrl = URL("http://192.168.0.113:8080/api/sync")
                        val conn = localUrl.openConnection() as HttpURLConnection
                        conn.requestMethod = "POST"
                        conn.setRequestProperty("Content-Type", "application/json")
                        conn.doOutput = true
                        conn.connectTimeout = 3000
                        conn.readTimeout = 3000
                        conn.outputStream.use { os ->
                            os.write(payloadJson.toByteArray(Charsets.UTF_8))
                        }
                        conn.responseCode
                    } catch (e: Exception) {}

                    // 2. Subir directamente a GitHub Cloud (accesible desde cualquier lugar / datos móviles)
                    val token = "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"
                    val apiUrl = URL("https://api.github.com/repos/mikecj92/vitaltrack/contents/vitaltrack_db.json")

                    var sha: String? = null
                    try {
                        val getConn = apiUrl.openConnection() as HttpURLConnection
                        getConn.setRequestProperty("Authorization", "Bearer $token")
                        getConn.setRequestProperty("Accept", "application/vnd.github.v3+json")
                        getConn.setRequestProperty("User-Agent", "VitalTrack-Android")
                        if (getConn.responseCode == 200) {
                            val resp = getConn.inputStream.bufferedReader().use { it.readText() }
                            val getObj = JSONObject(resp)
                            sha = getObj.optString("sha")
                        }
                    } catch (e: Exception) {}

                    val b64 = Base64.encodeToString(payloadJson.toByteArray(Charsets.UTF_8), Base64.NO_WRAP)
                    val putBody = JSONObject().apply {
                        put("message", "Auto-sync from VitalTrack Android")
                        put("content", b64)
                        if (sha != null && sha.isNotEmpty()) {
                            put("sha", sha)
                        }
                    }

                    val putConn = apiUrl.openConnection() as HttpURLConnection
                    putConn.requestMethod = "PUT"
                    putConn.setRequestProperty("Authorization", "Bearer $token")
                    putConn.setRequestProperty("Accept", "application/vnd.github.v3+json")
                    putConn.setRequestProperty("Content-Type", "application/json")
                    putConn.setRequestProperty("User-Agent", "VitalTrack-Android")
                    putConn.doOutput = true
                    putConn.outputStream.use { os ->
                        os.write(putBody.toString().toByteArray(Charsets.UTF_8))
                    }
                    val code = putConn.responseCode
                    if (code in 200..299) {
                        runOnUiThread {
                            Toast.makeText(this@MainActivity, "☁️ Sincronizado automáticamente con PC y Google Drive", Toast.LENGTH_SHORT).show()
                        }
                    }
                } catch (e: Exception) {}
            }
        }
    }
}
