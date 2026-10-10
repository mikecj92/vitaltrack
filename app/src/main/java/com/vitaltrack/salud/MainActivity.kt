package com.vitaltrack.salud

import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.util.Base64
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
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.time.Instant
import java.time.temporal.ChronoUnit

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var healthConnectClient: HealthConnectClient? = null
    private lateinit var requestPermissions: ActivityResultLauncher<Set<String>>
    private lateinit var updateDir: File

    private val GITHUB_TOKEN = "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"
    private val REPO_OWNER = "mikecj92"
    private val REPO_NAME = "vitaltrack"
    private val CURRENT_APK_VERSION_CODE = 3

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
        webView.settings.allowContentAccess = true
        webView.settings.textZoom = 100
        webView.settings.useWideViewPort = true
        webView.settings.loadWithOverviewMode = true
        webView.webChromeClient = WebChromeClient()
        webView.webViewClient = WebViewClient()

        // Limpiar cache vieja de WebView
        webView.clearCache(true)

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

        // Gestión de actualizaciones en vivo (Live Update)
        updateDir = File(filesDir, "live_update")
        val prefs = getSharedPreferences("vitaltrack_prefs", Context.MODE_PRIVATE)
        val lastApkVersion = prefs.getInt("apk_version_code", 0)

        // Si se acaba de instalar un APK nuevo, borrar archivos de actualización viejos
        if (lastApkVersion < CURRENT_APK_VERSION_CODE) {
            updateDir.deleteRecursively()
            File(filesDir, "www").deleteRecursively()
            prefs.edit().putInt("apk_version_code", CURRENT_APK_VERSION_CODE).apply()
        }

        val updatedIndex = File(updateDir, "index.html")
        if (updatedIndex.exists()) {
            webView.loadUrl("file://${updatedIndex.absolutePath}")
        } else {
            webView.loadUrl("file:///android_asset/index.html")
        }

        Toast.makeText(this, "VitalTrack v1.3.0 iniciado", Toast.LENGTH_SHORT).show()

        // Comprobación en segundo plano de actualizaciones en la nube
        checkForLiveUpdates()
    }

    private fun checkForLiveUpdates() {
        lifecycleScope.launch(Dispatchers.IO) {
            try {
                val prefs = getSharedPreferences("vitaltrack_prefs", Context.MODE_PRIVATE)
                val currentVersion = prefs.getString("live_version", "1.2.0") ?: "1.2.0"

                val versionUrl = URL("https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/contents/version.json")
                val conn = versionUrl.openConnection() as HttpURLConnection
                conn.setRequestProperty("Authorization", "Bearer $GITHUB_TOKEN")
                conn.setRequestProperty("User-Agent", "VitalTrackUpdater")
                conn.setRequestProperty("Accept", "application/vnd.github.v3+json")

                if (conn.responseCode == 200) {
                    val body = conn.inputStream.bufferedReader().use { it.readText() }
                    val json = JSONObject(body)
                    val contentBase64 = json.getString("content").replace("\n", "").replace("\r", "")
                    val versionJsonStr = String(Base64.decode(contentBase64, Base64.DEFAULT), Charsets.UTF_8)
                    val versionObj = JSONObject(versionJsonStr)
                    val remoteVersion = versionObj.optString("version", "")

                    if (remoteVersion.isNotEmpty() && remoteVersion != currentVersion) {
                        if (!updateDir.exists()) updateDir.mkdirs()

                        // Descargar archivos web raíz
                        downloadAssetFile("index.html", "index.html")
                        downloadAssetFile("app.js", "app.js")
                        downloadAssetFile("styles.css", "styles.css")
                        downloadAssetFile("version.json", "version.json")

                        // Descargar todas las ilustraciones médicas
                        val images = listOf(
                            "bird_dog.jpg", "box_squat.jpg", "floor_press.jpg", "single_arm_row.jpg", "treadmill.jpg",
                            "boxing_punch.jpg", "calf_raises.jpg", "glute_bridge.jpg", "shoulder_press.jpg",
                            "split_squat.jpg", "bicep_curl.jpg", "dumbbell_halo.jpg"
                        )
                        for (img in images) {
                            downloadAssetFile("assets/$img", "assets/$img")
                        }

                        prefs.edit().putString("live_version", remoteVersion).apply()

                        withContext(Dispatchers.Main) {
                            Toast.makeText(
                                this@MainActivity,
                                "✨ ¡VitalTrack se actualizó automáticamente a v$remoteVersion!",
                                Toast.LENGTH_LONG
                            ).show()

                            val updatedIndex = File(updateDir, "index.html")
                            if (updatedIndex.exists()) {
                                webView.loadUrl("file://${updatedIndex.absolutePath}")
                            } else {
                                webView.reload()
                            }
                        }
                    }
                }
            } catch (_: Exception) {}
        }
    }

    private fun downloadAssetFile(localName: String, repoPath: String) {
        try {
            val url = URL("https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/contents/$repoPath")
            val conn = url.openConnection() as HttpURLConnection
            conn.setRequestProperty("Authorization", "Bearer $GITHUB_TOKEN")
            conn.setRequestProperty("User-Agent", "VitalTrackUpdater")
            conn.setRequestProperty("Accept", "application/vnd.github.v3+json")

            if (conn.responseCode == 200) {
                val body = conn.inputStream.bufferedReader().use { it.readText() }
                val json = JSONObject(body)
                val contentBase64 = json.getString("content").replace("\n", "").replace("\r", "")
                val bytes = Base64.decode(contentBase64, Base64.DEFAULT)

                val target = File(updateDir, localName)
                target.parentFile?.mkdirs()
                FileOutputStream(target).use { it.write(bytes) }
            }
        } catch (_: Exception) {}
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

                // 3. Leer Calorias Activas
                var caloriesBurned = 0
                try {
                    val calResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = TotalCaloriesBurnedRecord::class,
                            timeRangeFilter = timeRange
                        )
                    )
                    caloriesBurned = calResponse.records.sumOf { it.energy.inKilocalories }.toInt()
                } catch (_: Exception) {}

                // 4. Leer Horas de Sueno
                var sleepHours = 0.0
                try {
                    val sleepRange = TimeRangeFilter.between(now.minus(24, ChronoUnit.HOURS), now)
                    val sleepResponse = client.readRecords(
                        ReadRecordsRequest(
                            recordType = SleepSessionRecord::class,
                            timeRangeFilter = sleepRange
                        )
                    )
                    val totalSleepMinutes = sleepResponse.records.sumOf {
                        java.time.Duration.between(it.startTime, it.endTime).toMinutes()
                    }
                    if (totalSleepMinutes > 0) {
                        sleepHours = (totalSleepMinutes / 60.0 * 10).toInt() / 10.0
                    }
                } catch (_: Exception) {}

                // 5. Crear JSON para enviar a la web
                val data = JSONObject().apply {
                    put("steps", totalSteps)
                    put("avgHeartRate", avgHr)
                    put("restingHeartRate", minHr)
                    put("calories", caloriesBurned)
                    if (sleepHours > 0) put("sleepHours", sleepHours)
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
        fun checkForUpdates() {
            checkForLiveUpdates()
        }
    }
}
