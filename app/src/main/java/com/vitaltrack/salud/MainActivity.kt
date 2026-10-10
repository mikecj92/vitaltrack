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
import androidx.health.connect.client.request.ReadRecordsRequest
import androidx.health.connect.client.time.TimeRangeFilter
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL
import java.time.Instant
import java.time.temporal.ChronoUnit
import android.util.Base64

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var healthConnectClient: HealthConnectClient? = null
    private lateinit var requestPermissions: ActivityResultLauncher<Set<String>>

    private val PERMISSIONS = setOf(
        HealthPermission.getReadPermission(HeartRateRecord::class),
        HealthPermission.getReadPermission(StepsRecord::class),
        HealthPermission.getReadPermission(SleepSessionRecord::class),
        HealthPermission.getReadPermission(TotalCaloriesBurnedRecord::class)
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
            if (granted.containsAll(PERMISSIONS)) {
                Toast.makeText(this, "Conexión a Health Connect autorizada", Toast.LENGTH_SHORT).show()
                fetchAndInjectHealthData()
            } else {
                Toast.makeText(this, "Permisos de salud parciales o denegados", Toast.LENGTH_LONG).show()
            }
        }

        // Cargar interfaz de VitalTrack localmente
        webView.loadUrl("file:///android_asset/index.html")
    }

    private fun checkAndRequestPermissions() {
        val client = healthConnectClient ?: return
        lifecycleScope.launch {
            val granted = client.permissionController.getGrantedPermissions()
            if (granted.containsAll(PERMISSIONS)) {
                fetchAndInjectHealthData()
            } else {
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

                // 1. Leer Pasos del Día
                val stepsResponse = client.readRecords(
                    ReadRecordsRequest(
                        recordType = StepsRecord::class,
                        timeRangeFilter = timeRange
                    )
                )
                val totalSteps = stepsResponse.records.sumOf { it.count }

                // 2. Leer Frecuencia Cardíaca
                val hrResponse = client.readRecords(
                    ReadRecordsRequest(
                        recordType = HeartRateRecord::class,
                        timeRangeFilter = timeRange
                    )
                )
                val allBpm = hrResponse.records.flatMap { it.samples.map { s -> s.beatsPerMinute } }
                val avgHr = if (allBpm.isNotEmpty()) allBpm.average().toInt() else 0
                val minHr = if (allBpm.isNotEmpty()) allBpm.minOrNull()?.toInt() ?: 0 else 0

                // 3. Crear JSON para enviar a la web
                val data = JSONObject().apply {
                    put("steps", totalSteps)
                    put("avgHeartRate", avgHr)
                    put("restingHeartRate", minHr)
                    put("timestamp", now.toString())
                }

                // Inyectar en JavaScript en la web
                runOnUiThread {
                    webView.evaluateJavascript(
                        "if (window.onHealthConnectDataReceived) { window.onHealthConnectDataReceived($data); }",
                        null
                    )
                }

            } catch (e: Exception) {
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "Error al leer Health Connect: ${e.message}", Toast.LENGTH_SHORT).show()
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
                    // 1. Enviar directamente al servidor local en PC si está en WiFi
                    try {
                        val localUrl = URL("http://192.168.0.113:8080/api/sync")
                        val conn = localUrl.openConnection() as HttpURLConnection
                        conn.requestMethod = "POST"
                        conn.setRequestProperty("Content-Type", "application/json")
                        conn.doOutput = true
                        conn.connectTimeout = 2500
                        conn.readTimeout = 2500
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
