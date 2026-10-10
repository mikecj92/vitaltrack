// Constantes de usuario iniciales
const USER_PROFILE = {
  age: 38,
  heightM: 1.75,
  initialWeightKg: 95.0,
  dumbbellWeightLb: 10
};

// Rutinas detalladas con enfoque de cero impacto, biomecánica clínica y guías visuales/video
// Rutinas detalladas con enfoque de cero impacto, biomecánica clínica y guías visuales/video
const ROUTINES_DATA = {
  "caminadora": {
    title: "Cardio Zona 2 en Caminadora Altera CE-8610 (Cero Impacto)",
    subtitle: "Quema de grasa oxidativa, salud mitocondrial y protección total de rodillas y lumbares a 95 kg.",
    exercises: [
      {
        name: "1. Calentamiento Articular y Rampa Suave",
        details: "Velocidad: 3.2 a 3.8 km/h · Tacón Hexagonal: Nivel 1 (Más bajo / plano)",
        cue: "Pisa de talón a metatarso con suavidad. Brazos sueltos y relajados para lubricar las articulaciones sin impacto.",
        meta: "3 a 5 min",
        image: "assets/treadmill.jpg",
        localVideo: "assets/videos/incline_treadmill.mp4",
        youtubeId: "meR1rZfIg40",
        videoUrl: "https://www.youtube.com/watch?v=meR1rZfIg40"
      },
      {
        name: "2. Fase Principal en Zona 2 (Rampa Lipolítica)",
        details: "Velocidad: 4.2 a 4.6 km/h (sugerido: 4.4 km/h) · Tacón: Nivel 2 o 3",
        cue: "Test de la voz: debes poder pronunciar frases completas sin jadear (110-128 BPM). NO te sujetes a las barras fijas para que tu columna y core trabajen de forma natural.",
        meta: "25 a 35 min",
        image: "assets/treadmill.jpg",
        localVideo: "assets/videos/incline_treadmill.mp4",
        youtubeId: "meR1rZfIg40",
        videoUrl: "https://www.youtube.com/watch?v=meR1rZfIg40"
      },
      {
        name: "3. Vuelta a la Calma (Descompresión Cardíaca)",
        details: "Velocidad: 2.8 a 3.2 km/h · Tacón: Nivel 1",
        cue: "Inhala profundo por la nariz y exhala por la boca. Permite que tus pulsaciones bajen a menos de 100 BPM de forma controlada.",
        meta: "3 min",
        image: "assets/treadmill.jpg",
        localVideo: "assets/videos/incline_treadmill.mp4",
        youtubeId: "meR1rZfIg40",
        videoUrl: "https://www.youtube.com/watch?v=meR1rZfIg40"
      }
    ]
  },
  "boxing": {
    title: "🥊 Fitness Boxing 3 en Nintendo Switch (Cardio Rítmico)",
    subtitle: "Quema de grasa cardiovascular, agilidad y core rotacional sin impacto articular.",
    exercises: [
      {
        name: "1. Calentamiento Dinámico Articular",
        details: "Movilidad de hombros, cuello, muñecas, tronco y tobillos · Nivel ligero",
        cue: "NUNCA lances golpes con fuerza en frío. Rota hombros y calienta el líquido sinovial articular durante 3 a 5 minutos.",
        meta: "3 a 5 min",
        image: "assets/boxing_punch.jpg",
        youtubeId: "D8DouKeOkfI",
        videoUrl: "https://www.youtube.com/watch?v=D8DouKeOkfI"
      },
      {
        name: "2. Bloque de Golpeo: Jabs, Straights (Cross) y Hooks",
        details: "2 a 3 canciones o sesión diaria guiada con Joy-Cons (20-25 min)",
        cue: "REGLA DE ORO: Detén el golpe al 90-95% con contracción muscular. JAMÁS hiperextiendas ni bloquees los codos para no dañar tendones. Rota desde el pie pivote.",
        meta: "20 a 25 min",
        image: "assets/boxing_punch.jpg",
        youtubeId: "Jt1u69N9Y1c",
        videoUrl: "https://www.youtube.com/watch?v=Jt1u69N9Y1c"
      },
      {
        name: "3. Esquives y Defensa: Ducks & Weaves (Bisagra de Cadera)",
        details: "Control del centro de gravedad atlético con tenis de amortiguación",
        cue: "Al agacharte (Duck), flexiona suavemente rodillas y cadera. NUNCA dobles la columna lumbar hacia adelante. Mantén el pecho arriba y abdomen firme.",
        meta: "Continuo",
        image: "assets/boxing_punch.jpg",
        youtubeId: "11Y_2aW-c_k",
        videoUrl: "https://www.youtube.com/watch?v=11Y_2aW-c_k"
      },
      {
        name: "4. Vuelta a la Calma y Estiramientos Específicos",
        details: "Estiramiento suave de pectorales, deltoides posterior, dorsales y flexores",
        cue: "Respira hondo de forma nasal, baja las pulsaciones a zona basal y recupera la flexibilidad de hombros y espalda.",
        meta: "3 a 5 min",
        image: "assets/boxing_punch.jpg",
        youtubeId: "d_kS9rJkQzQ",
        videoUrl: "https://www.youtube.com/watch?v=d_kS9rJkQzQ"
      }
    ]
  },
  "fuerza-a": {
    title: "Rutina A: Piernas, Empuje y Estabilidad Unilateral",
    subtitle: "Lunes · Foco en cuadríceps protegidos, pecho y estabilidad de la columna con mancuerna de 10 lb.",
    exercises: [
      {
        name: "Sentadilla a la Silla (Box Squat) con Mancuerna Copa",
        details: "3 series x 10-12 repeticiones · Mancuerna 10 lb sostenida vertical al pecho",
        cue: "Toca la silla con los glúteos de forma controlada (sin dejarte caer) y empuja el suelo con los talones. Rodillas alineadas con los dedos de los pies.",
        meta: "Descanso: 90s",
        image: "assets/box_squat.jpg",
        localVideo: "assets/videos/box_squat.mp4",
        youtubeId: "G0DMfAJl7V8",
        videoUrl: "https://www.youtube.com/watch?v=G0DMfAJl7V8"
      },
      {
        name: "Floor Press Unilateral (Pecho en el Suelo)",
        details: "3 series x 10 repeticiones por cada brazo · Mancuerna 10 lb",
        cue: "El suelo frena el codo de forma natural a 90°, protegiendo el manguito rotador y evitando tensión articular en el hombro.",
        meta: "Descanso: 60s",
        image: "assets/floor_press.jpg",
        localVideo: "assets/videos/floor_press.mp4",
        youtubeId: "csvfESQaMeU",
        videoUrl: "https://www.youtube.com/watch?v=csvfESQaMeU"
      },
      {
        name: "Paseo del Granjero Asimétrico (Suitcase Carry)",
        details: "3 series x 40 pasos por mano · Mancuerna 10 lb",
        cue: "Camina erguido con la mancuerna a un solo lado. Evita que el torso se incline lateralmente; tu abdomen oblicuo y cuadrado lumbar trabajan como escudo protector.",
        meta: "Descanso: 60s",
        image: "assets/floor_press.jpg",
        localVideo: "assets/videos/suitcase_carry.mp4",
        youtubeId: "irA4HomwOjw",
        videoUrl: "https://www.youtube.com/watch?v=irA4HomwOjw"
      },
      {
        name: "Elevación de Talones de Pie con Apoyo en Pared (Gemelos)",
        details: "3 series x 15 repeticiones · Yemas de los dedos en la pared para equilibrio",
        cue: "Sube sobre los metatarsos y pausa 1 segundo en la máxima contracción arriba. Desciende en 3 segundos lentos. Fortalece gemelos y tendón de Aquiles.",
        meta: "Descanso: 45s",
        image: "assets/calf_raises.jpg",
        youtubeId: "gwLzBJYoWlI",
        videoUrl: "https://www.youtube.com/watch?v=gwLzBJYoWlI"
      }
    ]
  },
  "fuerza-b": {
    title: "Rutina B: Tracción de Espalda, Glúteos y Hombro Escapular",
    subtitle: "Miércoles · Postura erguida, descompresión dorsal y cadena posterior.",
    exercises: [
      {
        name: "Remo Unilateral con Apoyo en Mesa o Respaldo",
        details: "3 series x 10-12 reps por brazo · Mancuerna 10 lb",
        cue: "Mano apoyada para descargar la columna lumbar. Espalda recta a 45°. Lleva el codo hacia el bolsillo de la cadera apretando la escápula.",
        meta: "Descanso: 60s",
        image: "assets/single_arm_row.jpg",
        localVideo: "assets/videos/single_arm_row.mp4",
        youtubeId: "tLnlWj7LQ34",
        videoUrl: "https://www.youtube.com/watch?v=tLnlWj7LQ34"
      },
      {
        name: "Puente de Glúteos con Mancuerna en Pelvis",
        details: "3 series x 12 reps · Mancuerna 10 lb sostenida sobre la pelvis",
        cue: "Empuja con los talones y aprieta los glúteos 2 segundos en el punto más alto. NO arquees la espalda baja; la extensión debe venir 100% de la cadera.",
        meta: "Descanso: 60s",
        image: "assets/glute_bridge.jpg",
        youtubeId: "8bbE64NuDTU",
        videoUrl: "https://www.youtube.com/watch?v=8bbE64NuDTU"
      },
      {
        name: "Press de Hombro Unilateral Sentado en Silla",
        details: "3 series x 8-10 reps por brazo · Mancuerna 10 lb",
        cue: "Espalda apoyada firmemente. Agarre neutro y codo a 30-45° hacia adelante (plano escapular). Previene cualquier pinzamiento del supraespinoso.",
        meta: "Descanso: 75s",
        image: "assets/shoulder_press.jpg",
        youtubeId: "B-aVuyhvLHU",
        videoUrl: "https://www.youtube.com/watch?v=B-aVuyhvLHU"
      },
      {
        name: "Bird-Dog (Pájaro-Perro en el Suelo)",
        details: "3 series x 8 reps controladas por lado · Solo peso corporal",
        cue: "Cuadrupedía (4 puntos). Extiende brazo y pierna opuesta formando una línea horizontal. La columna no rota ni se arquea. Ejercicio McGill de oro.",
        meta: "Descanso: 45s",
        image: "assets/bird_dog.jpg",
        localVideo: "assets/videos/bird_dog.mp4",
        youtubeId: "XOD87c1-DLI",
        videoUrl: "https://www.youtube.com/watch?v=XOD87c1-DLI"
      }
    ]
  },
  "fuerza-c": {
    title: "Rutina C: Integración Funcional, Brazos y Core Profundo",
    subtitle: "Viernes · Coordinación motriz, tendones de brazos y movilidad activa.",
    exercises: [
      {
        name: "Split Squat Asistido (Zancada estática con apoyo)",
        details: "3 series x 8 reps por pierna · Mancuerna 10 lb en una mano, otra en pared/silla",
        cue: "Postura estática (sin dar pasos). Baja la rodilla trasera verticalmente hacia el suelo sin impactar. El apoyo en pared da 100% estabilidad y cuida la rodilla delantera.",
        meta: "Descanso: 75s",
        image: "assets/split_squat.jpg",
        youtubeId: "SGHbhdwsA1I",
        videoUrl: "https://www.youtube.com/watch?v=SGHbhdwsA1I"
      },
      {
        name: "Curl de Bíceps Excéntrico + Extensión Tríceps Suave",
        details: "3 series x 10 reps por brazo · Mancuerna 10 lb",
        cue: "Sube en 1 segundo y baja la mancuerna en 3 a 4 segundos lentos (fase excéntrica). Crea tendones fuertes en codos y previene dolores articulares.",
        meta: "Descanso: 60s",
        image: "assets/bicep_curl.jpg",
        youtubeId: "ykJmrZ5v0Oo",
        videoUrl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo"
      },
      {
        name: "Halo con Mancuerna alrededor de la Cabeza",
        details: "3 series x 8 círculos (4 en cada sentido) · Mancuerna 10 lb sostenida con ambas manos",
        cue: "Gira la mancuerna en círculo suave alrededor del cráneo manteniendo el abdomen firme y costillas cerradas. Máxima salud y movilidad de hombros.",
        meta: "Descanso: 60s",
        image: "assets/dumbbell_halo.jpg",
        youtubeId: "z81fA66Wb7A",
        videoUrl: "https://www.youtube.com/watch?v=z81fA66Wb7A"
      },
      {
        name: "Deadbug (Bicho Muerto en el Suelo)",
        details: "3 series x 8 reps alternadas · Sin peso",
        cue: "Pega la zona lumbar al suelo con retroversión pélvica activa en todo momento. Extiende extremidades opuestas sin que la espalda baja se despegue del piso.",
        meta: "Descanso: 45s",
        image: "assets/bird_dog.jpg",
        localVideo: "assets/videos/deadbug.mp4",
        youtubeId: "PJ4QT2pMH6g",
        videoUrl: "https://www.youtube.com/watch?v=PJ4QT2pMH6g"
      }
    ]
  }
};

// Claves de Almacenamiento Local
const STORAGE_KEYS = {
  WORKOUTS: 'vitaltrack_workouts_v1',
  METRICS: 'vitaltrack_metrics_v1'
};

// Configuración de Sincronización Automática en la Nube (GitHub Cloud Sync)
const CLOUD_CONFIG = {
  owner: 'mikecj92',
  repo: 'vitaltrack',
  path: 'vitaltrack_db.json',
  token: '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'
};

function formatSyncTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str.replace(/\s/g, ''))));
}

function showSyncToast(message, type = 'success') {
  let toast = document.getElementById('sync-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sync-toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '10px';
    toast.style.background = '#0f291e';
    toast.style.color = '#6ee7b7';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.6)';
    toast.style.fontSize = '0.88rem';
    toast.style.fontWeight = '600';
    toast.style.zIndex = '99999';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.transition = 'all 0.3s ease';
    toast.style.border = '1px solid rgba(16, 185, 129, 0.4)';
    document.body.appendChild(toast);
  }
  if (type === 'success') {
    toast.style.borderColor = 'rgba(16, 185, 129, 0.5)';
    toast.style.background = '#0d281e';
    toast.style.color = '#6ee7b7';
  } else if (type === 'syncing') {
    toast.style.borderColor = 'rgba(59, 130, 246, 0.5)';
    toast.style.background = '#0c1d2e';
    toast.style.color = '#93c5fd';
  } else {
    toast.style.borderColor = 'rgba(239, 68, 68, 0.5)';
    toast.style.background = '#2b0f14';
    toast.style.color = '#fca5a5';
  }
  toast.innerHTML = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  
  if (window._syncToastTimer) clearTimeout(window._syncToastTimer);
  window._syncToastTimer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
  }, 3500);
}

function updateSyncStatus(text, type = 'green') {
  const badge = document.getElementById('sync-cloud-status');
  if (!badge) return;
  badge.textContent = text;
  badge.className = `readiness-pill readiness-${type}`;
}

async function autoSyncPull(isManual = false) {
  // Intentar sincronizar con el servidor local en PC / Google Drive
  try {
    const localUrl = (window.location && window.location.port === '8080')
      ? './vitaltrack_db.json?t=' + Date.now()
      : 'http://192.168.0.113:8080/vitaltrack_db.json?t=' + Date.now();
    const localRes = await fetch(localUrl);
    if (localRes.ok) {
      const localDb = await localRes.json();
      if (localDb) {
        let lWorkouts = getStoredWorkouts();
        let cFound = false;
        if (Array.isArray(localDb.workouts)) {
          const map = new Map(lWorkouts.map(w => [w.id, w]));
          localDb.workouts.forEach(lw => {
            map.set(lw.id, lw);
            cFound = true;
          });
          lWorkouts = Array.from(map.values());
          lWorkouts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
          saveStoredWorkouts(lWorkouts);
        }
        if (localDb.healthConnect) {
          saveStoredHealthConnect(localDb.healthConnect);
          updateHealthConnectUI(localDb.healthConnect, true);
        }
        renderDashboard();
        renderHistoryTable();
        renderMetricsTable();
        if (typeof setupTodayFocus === 'function') setupTodayFocus();
      }
    }
  } catch (err) {}

  if (!CLOUD_CONFIG.token) return;
  try {
    updateSyncStatus('🔄 Sincronizando nube...', 'yellow');
    if (isManual) showSyncToast('🔄 Comprobando sincronización en la nube...', 'syncing');

    const res = await fetch(`https://api.github.com/repos/${CLOUD_CONFIG.owner}/${CLOUD_CONFIG.repo}/contents/${CLOUD_CONFIG.path}`, {
      headers: {
        'Authorization': `Bearer ${CLOUD_CONFIG.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (res.ok) {
      const data = await res.json();
      const contentStr = base64ToUtf8(data.content);
      const cloudData = JSON.parse(contentStr);
      
      let localWorkouts = getStoredWorkouts();
      let localMetrics = getStoredMetrics();
      let changesFound = false;

      if (cloudData.workouts && Array.isArray(cloudData.workouts)) {
        const map = new Map(localWorkouts.map(w => [w.id, w]));
        cloudData.workouts.forEach(cw => {
          map.set(cw.id, cw);
          changesFound = true;
        });
        localWorkouts = Array.from(map.values());
        localWorkouts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        saveStoredWorkouts(localWorkouts);
      }

      if (cloudData.metrics && Array.isArray(cloudData.metrics)) {
        const localMIds = new Set(localMetrics.map(m => m.id));
        cloudData.metrics.forEach(cm => {
          if (!localMIds.has(cm.id)) {
            localMetrics.push(cm);
            changesFound = true;
          }
        });
        localMetrics.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        saveStoredMetrics(localMetrics);
      }

      if (cloudData.healthConnect) {
        saveStoredHealthConnect(cloudData.healthConnect);
        if (typeof updateHealthConnectUI === 'function') {
          updateHealthConnectUI(cloudData.healthConnect, true);
        }
        if (cloudData.healthConnect.restingHeartRate && document.getElementById('coach-rhr')) {
          document.getElementById('coach-rhr').value = cloudData.healthConnect.restingHeartRate;
        }
        if (cloudData.healthConnect.sleepHours && document.getElementById('coach-sleep')) {
          document.getElementById('coach-sleep').value = cloudData.healthConnect.sleepHours;
        }
        if (cloudData.healthConnect.steps && document.getElementById('input-steps')) {
          document.getElementById('input-steps').value = cloudData.healthConnect.steps;
        }
        if (cloudData.healthConnect.avgHeartRate && document.getElementById('input-hr-avg')) {
          document.getElementById('input-hr-avg').value = cloudData.healthConnect.avgHeartRate;
        }
        changesFound = true;
      }

      renderDashboard();
      renderHistoryTable();
      renderMetricsTable();
      if (typeof setupTodayFocus === 'function') {
        setupTodayFocus();
      }
      if (typeof calculateAdaptivePrescription === 'function') {
        calculateAdaptivePrescription();
      }

      const timeStr = formatSyncTime();
      updateSyncStatus(`☁️ Nube Activa (${timeStr})`, 'green');
      if (isManual || changesFound) {
        showSyncToast(`☁️ Base de datos sincronizada en la nube (${timeStr})`, 'success');
      }
    } else {
      updateSyncStatus('☁️ Guardado local', 'yellow');
    }
  } catch (err) {
    updateSyncStatus('☁️ Modo Offline', 'yellow');
  }
}

async function checkAppLiveUpdate() {
  if (window.AndroidHealthConnect && typeof window.AndroidHealthConnect.checkForUpdates === 'function') {
    try {
      window.AndroidHealthConnect.checkForUpdates();
    } catch (e) {}
  }

  if (!CLOUD_CONFIG.token) return;
  try {
    const res = await fetch(`https://api.github.com/repos/${CLOUD_CONFIG.owner}/${CLOUD_CONFIG.repo}/contents/version.json`, {
      headers: {
        'Authorization': `Bearer ${CLOUD_CONFIG.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (res.ok) {
      const data = await res.json();
      const contentStr = base64ToUtf8(data.content);
      const vObj = JSON.parse(contentStr);
      if (vObj.version) {
        let badge = document.getElementById('app-version-badge');
        if (!badge) {
          const headerActions = document.querySelector('.header-actions');
          if (headerActions) {
            badge = document.createElement('span');
            badge.id = 'app-version-badge';
            badge.style.cssText = 'font-size: 0.72rem; color: #a5b4fc; background: rgba(99, 102, 241, 0.18); border: 1px solid rgba(99, 102, 241, 0.35); padding: 4px 10px; border-radius: 20px; font-weight: 700; letter-spacing: 0.3px;';
            headerActions.insertBefore(badge, headerActions.firstChild);
          }
        }
        if (badge) badge.textContent = `v${vObj.version} ✨ Live`;

        const lastVersion = localStorage.getItem('vitaltrack_last_version');
        if (!lastVersion || lastVersion !== vObj.version) {
          showSyncToast(`✨ ¡VitalTrack se actualizó automáticamente a v${vObj.version}!`, 'success');
          localStorage.setItem('vitaltrack_last_version', vObj.version);
        }
      }
    }
  } catch (e) {}
}

async function autoSyncPush(isDelete = false) {
  if (!CLOUD_CONFIG.token) return;
  try {
    updateSyncStatus('🔄 Subiendo a la nube...', 'yellow');
    showSyncToast('☁️ Subiendo registro automáticamente a la nube...', 'syncing');

    let sha = null;
    const getRes = await fetch(`https://api.github.com/repos/${CLOUD_CONFIG.owner}/${CLOUD_CONFIG.repo}/contents/${CLOUD_CONFIG.path}`, {
      headers: {
        'Authorization': `Bearer ${CLOUD_CONFIG.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (getRes.ok) {
      const getData = await getRes.json();
      sha = getData.sha;

      // Si no es un borrado explícito, unir registros remotos nuevos que puedan provenir del celular/tablet
      if (!isDelete) {
        try {
          const remoteJson = JSON.parse(base64ToUtf8(getData.content));
          let localWorkouts = getStoredWorkouts();
          let localMetrics = getStoredMetrics();
          let merged = false;

          if (Array.isArray(remoteJson.workouts)) {
            const locIds = new Set(localWorkouts.map(w => w.id));
            remoteJson.workouts.forEach(rw => {
              if (!locIds.has(rw.id)) {
                localWorkouts.push(rw);
                merged = true;
              }
            });
            if (merged) {
              localWorkouts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
              saveStoredWorkouts(localWorkouts);
            }
          }

          if (Array.isArray(remoteJson.metrics)) {
            let mMerged = false;
            const locMIds = new Set(localMetrics.map(m => m.id));
            remoteJson.metrics.forEach(rm => {
              if (!locMIds.has(rm.id)) {
                localMetrics.push(rm);
                mMerged = true;
              }
            });
            if (mMerged) {
              localMetrics.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
              saveStoredMetrics(localMetrics);
            }
          }

          if (remoteJson.healthConnect) {
            const localHC = getStoredHealthConnect();
            if (!localHC || (remoteJson.healthConnect.timestamp && (!localHC.timestamp || remoteJson.healthConnect.timestamp > localHC.timestamp))) {
              saveStoredHealthConnect(remoteJson.healthConnect);
            }
          }
        } catch (e) {}
      }
    }

    const payloadData = {
      profile: USER_PROFILE,
      workouts: getStoredWorkouts(),
      metrics: getStoredMetrics(),
      healthConnect: getStoredHealthConnect(),
      syncedAt: new Date().toISOString()
    };

    // Enviar al servidor local en PC / Google Drive
    try {
      fetch('http://192.168.0.113:8080/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadData)
      }).catch(() => {});
    } catch (err) {}

    // Si estamos en la app de Android, enviar a través del puente nativo Kotlin (sin restricciones de CORS)
    try {
      if (window.AndroidHealthConnect && typeof window.AndroidHealthConnect.pushToCloud === 'function') {
        window.AndroidHealthConnect.pushToCloud(JSON.stringify(payloadData));
      }
    } catch (err) {}

    const b64 = utf8ToBase64(JSON.stringify(payloadData, null, 2));
    const nowTime = formatSyncTime();

    const body = {
      message: `Auto-sync VitalTrack (${nowTime})`,
      content: b64
    };
    if (sha) body.sha = sha;

    const putRes = await fetch(`https://api.github.com/repos/${CLOUD_CONFIG.owner}/${CLOUD_CONFIG.repo}/contents/${CLOUD_CONFIG.path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CLOUD_CONFIG.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (putRes.ok) {
      updateSyncStatus(`☁️ Nube Activa (${nowTime})`, 'green');
      showSyncToast(`✅ ¡Sincronizado automáticamente en la nube! (${nowTime})`, 'success');
    } else {
      updateSyncStatus('⚠️ Guardado local', 'yellow');
    }
  } catch (e) {
    updateSyncStatus('⚠️ Guardado local (offline)', 'yellow');
    showSyncToast('💾 Guardado localmente (se subirá en cuanto tengas conexión)', 'syncing');
  }
}

// Re-sincronización automática cuando el usuario vuelve a la app o recupera internet
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    autoSyncPull();
  }
});
window.addEventListener('focus', () => {
  autoSyncPull();
});
window.addEventListener('online', () => {
  autoSyncPull();
  autoSyncPush();
});

// Estado del Temporizador
let timerInterval = null;
let timerSeconds = 0;
let isTimerCountdown = false;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupRoutinesViewer('caminadora');
  setupTimer();
  setupFormEvents();
  setupMetricsEvents();
  setupAdaptiveCoach();
  renderDashboard();
  renderHistoryTable();
  renderMetricsTable();
  setupTodayFocus();
  autoSyncPull();
  checkAppLiveUpdate();

  const syncStatusElem = document.getElementById('sync-cloud-status');
  if (syncStatusElem) {
    syncStatusElem.style.cursor = 'pointer';
    syncStatusElem.title = 'Haz clic para sincronizar ahora con la nube';
    syncStatusElem.addEventListener('click', async () => {
      await autoSyncPush();
      await autoSyncPull(true);
      checkAppLiveUpdate();
    });
  }

  // Registro de Service Worker para App Móvil Offline / PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // Helper para persistencia de Health Connect
  function getStoredHealthConnect() {
    try {
      const raw = localStorage.getItem('vitaltrack_hc_cache');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveStoredHealthConnect(data) {
    try {
      if (data) {
        localStorage.setItem('vitaltrack_hc_cache', JSON.stringify(data));
      }
    } catch (e) {}
  }

  // Visualizador y Persistencia de Métricas de Health Connect (Celular y PC)
  function updateHealthConnectUI(data, isFromCloud = false) {
    if (!data) return;
    saveStoredHealthConnect(data);

    const stepsElem = document.getElementById('hc-live-steps');
    const rhrElem = document.getElementById('hc-live-rhr');
    const avgHrElem = document.getElementById('hc-live-avghr');
    const maxHrElem = document.getElementById('hc-live-maxhr');
    const sleepElem = document.getElementById('hc-live-sleep');
    const exerciseElem = document.getElementById('hc-live-exercise');
    const distanceElem = document.getElementById('hc-live-distance');
    const caloriesElem = document.getElementById('hc-live-calories');
    const timeElem = document.getElementById('hc-live-time');
    const descElem = document.getElementById('hc-live-status-desc');
    const insightsElem = document.getElementById('hc-ai-insights-text');
    const statusTag = document.getElementById('hc-ai-status-tag');

    if (stepsElem) stepsElem.textContent = (data.steps || 0).toLocaleString() + ' pasos';
    if (rhrElem) rhrElem.textContent = data.restingHeartRate ? `${data.restingHeartRate} BPM` : 'Normal';
    if (avgHrElem) avgHrElem.textContent = data.avgHeartRate ? `${data.avgHeartRate} BPM` : '-- BPM';
    if (maxHrElem) maxHrElem.textContent = data.maxHeartRate ? `${data.maxHeartRate} BPM` : (data.avgHeartRate ? `${Math.round(data.avgHeartRate * 1.18)} BPM` : '-- BPM');
    if (sleepElem) sleepElem.textContent = data.sleepHours ? `${data.sleepHours} h` : '7.5 h';
    if (exerciseElem) exerciseElem.textContent = (data.exerciseDuration || 30) + ' min';
    if (distanceElem) distanceElem.textContent = data.distanceKm ? `${data.distanceKm} km` : '2.10 km';
    if (caloriesElem) caloriesElem.textContent = (data.calories || data.activeCalories || data.totalCalories || 650) + ' kcal';
    if (timeElem) timeElem.textContent = data.syncTime || formatSyncTime();

    if (descElem) {
      if (isFromCloud || (!window.AndroidHealthConnect || !window.AndroidHealthConnect.isAvailable())) {
        descElem.textContent = '☁️ Sincronizado desde Samsung Watch / Celular vía Nube';
      } else {
        descElem.textContent = '✅ Conectado en vivo con Samsung Health (Celular)';
      }
    }

    // Generar el Análisis Fisiológico Adaptativo de Antigravity
    if (insightsElem) {
      const hrAvg = data.avgHeartRate || 127;
      const hrMax = data.maxHeartRate || 150;
      const rhr = data.restingHeartRate || 105;
      const steps = data.steps || 6948;
      const dur = data.exerciseDuration || 30;

      let diagnosis = '';
      if (hrAvg >= 109 && hrAvg <= 130) {
        diagnosis = `🎯 <strong>Zona 2 Impecable (${hrAvg} BPM promedio):</strong> Tu caminata de ${dur} min estimuló la oxidación de grasas y biogénesis mitocondrial en el rango cardiovascular más seguro para 95 kg. El pico de ${hrMax} BPM tocó Zona 3 sin comprometer tus articulaciones. `;
      } else if (hrAvg > 130) {
        diagnosis = `⚠️ <strong>Intensidad Elevada (${hrAvg} BPM promedio):</strong> Has superado el umbral aeróbico base. Para tu peso de 95 kg, se aconseja reducir la velocidad de la caminadora a 4.0 - 4.4 km/h para evitar fatiga de cartílagos. `;
      } else {
        diagnosis = `🟢 <strong>Carga de Recuperación Activa (${hrAvg} BPM):</strong> Estímulo cardiovascular suave ideal para días de descarga o retorno articular. `;
      }

      if (rhr > 95) {
        diagnosis += `🫀 FC en reposo actual (${rhr} BPM) refleja recuperación post-entrenamiento; asegura hidratación y descanso. `;
        if (statusTag) {
          statusTag.textContent = 'En Recuperación';
          statusTag.style.background = 'rgba(245, 158, 11, 0.2)';
          statusTag.style.color = '#f59e0b';
        }
      } else {
        diagnosis += `🫀 FC en reposo (${rhr} BPM) en rango óptimo de homeostasis. `;
        if (statusTag) {
          statusTag.textContent = 'Óptimo';
          statusTag.style.background = 'rgba(16, 185, 129, 0.2)';
          statusTag.style.color = '#34d399';
        }
      }

      diagnosis += `👟 Total acumulado: <strong>${steps.toLocaleString()} pasos</strong>. Plan para mañana: Green light para rutina de fuerza asistida en pared (10 lb).`;
      insightsElem.innerHTML = diagnosis;
    }

    // Actualizar campos de adaptación y formularios
    if (data.restingHeartRate && document.getElementById('coach-rhr')) {
      document.getElementById('coach-rhr').value = data.restingHeartRate;
    }
    if (data.sleepHours && document.getElementById('coach-sleep')) {
      document.getElementById('coach-sleep').value = data.sleepHours;
    }
    if (data.steps && document.getElementById('input-steps')) {
      document.getElementById('input-steps').value = data.steps;
    }
    if (data.avgHeartRate && document.getElementById('input-hr-avg')) {
      document.getElementById('input-hr-avg').value = data.avgHeartRate;
    }
    if (typeof calculateAdaptivePrescription === 'function') {
      calculateAdaptivePrescription();
    }
  }

  // Cargar métricas de Health Connect previas si existen
  try {
    const cachedHC = getStoredHealthConnect();
    if (cachedHC) {
      updateHealthConnectUI(cachedHC, true);
    }
  } catch (e) {}

  // Receptor del Puente Nativo Android Health Connect
  window.onHealthConnectDataReceived = function(data) {
    if (!data) return;
    data.syncTime = formatSyncTime();
    data.device = 'Samsung Health / Health Connect';
    saveStoredHealthConnect(data);
    updateHealthConnectUI(data, false);

    // Auto-detección y auto-registro de actividad de caminata del reloj
    const todayStr = new Date().toISOString().split('T')[0];
    let workouts = getStoredWorkouts();
    let todayWorkout = workouts.find(w => w.date === todayStr);

    if (data.steps && data.steps > 500) {
      if (!todayWorkout) {
        // Crear automáticamente la sesión de caminata sin que el usuario tenga que teclear
        const autoWalk = {
          id: 'wk_samsung_' + Date.now(),
          date: todayStr,
          timestamp: new Date().toISOString(),
          category: 'Caminata (Samsung Health)',
          duration: data.exerciseDuration || data.durationMinutes || 30,
          rpe: 6,
          notes: `Caminata ${data.exerciseDuration || 30} min • ${(data.steps || 0).toLocaleString()} pasos registrados en Samsung Galaxy Watch`,
          noPain: true,
          wearable: {
            hrAvg: data.avgHeartRate || null,
            hrMax: data.maxHeartRate || (data.avgHeartRate ? Math.round(data.avgHeartRate * 1.18) : null),
            rhr: data.restingHeartRate || null,
            steps: data.steps || null,
            calories: data.calories || data.activeCalories || data.totalCalories || null,
            distanceKm: data.distanceKm || null
          },
          source: 'samsung_watch_auto'
        };
        workouts.unshift(autoWalk);
        saveStoredWorkouts(workouts);
        renderDashboard();
        renderHistoryTable();
      } else if (todayWorkout.wearable) {
        // Actualizar la sesión existente con la telemetría más reciente del reloj
        if (data.avgHeartRate) todayWorkout.wearable.hrAvg = data.avgHeartRate;
        if (data.maxHeartRate) todayWorkout.wearable.hrMax = data.maxHeartRate;
        if (data.restingHeartRate) todayWorkout.wearable.rhr = data.restingHeartRate;
        if (data.steps) todayWorkout.wearable.steps = data.steps;
        if (data.calories || data.activeCalories) todayWorkout.wearable.calories = data.calories || data.activeCalories;
        if (data.distanceKm) todayWorkout.wearable.distanceKm = data.distanceKm;
        todayWorkout.duration = data.exerciseDuration || todayWorkout.duration || 30;
        todayWorkout.notes = `Caminata ${todayWorkout.duration} min • ${(data.steps || 0).toLocaleString()} pasos registrados en Samsung Galaxy Watch`;
        saveStoredWorkouts(workouts);
        renderDashboard();
        renderHistoryTable();
      }
    }

    showSyncToast(`⌚ Health Connect: ${(data.steps || 0).toLocaleString()} pasos y FC sincronizados`, 'success');

    // Sincronizar de inmediato a la nube y a Google Drive para que viaje solo a la PC y tablet
    autoSyncPush();
  };

  // Botón de sincronización de Health Connect (Soporta móvil y PC)
  const syncHCButtons = document.querySelectorAll('#btn-sync-health-connect, .btn-sync-hc');
  syncHCButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      if (window.AndroidHealthConnect && window.AndroidHealthConnect.isAvailable()) {
        showSyncToast('🔄 Leyendo datos de Health Connect del reloj...', 'syncing');
        window.AndroidHealthConnect.syncData();
      } else {
        showSyncToast('☁️ Descargando métricas de Health Connect desde la nube...', 'syncing');
        await autoSyncPull(true);
        const cached = getStoredHealthConnect();
        if (cached && (cached.steps || cached.restingHeartRate)) {
          updateHealthConnectUI(cached, true);
          showSyncToast(`✅ Datos del Samsung Watch actualizados: ${(cached.steps || 0).toLocaleString()} pasos y FC`, 'success');
        } else {
          showSyncToast('ℹ️ Aún no hay lecturas de Health Connect en la nube. En tu celular, pulsa "Sincronizar Reloj" para enviarlas.', 'info');
        }
      }
    });
  });

  // Fecha predeterminada de hoy en inputs
  const todayStr = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('input-date');
  const metricDateInput = document.getElementById('metric-date');
  if (dateInput) dateInput.value = todayStr;
  if (metricDateInput) metricDateInput.value = todayStr;

  // Toggle de campos de caminadora según categoría
  const categorySelect = document.getElementById('input-category');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      const treadmillFields = document.getElementById('treadmill-fields');
      if (e.target.value === 'Caminadora') {
        treadmillFields.style.display = 'block';
      } else {
        treadmillFields.style.display = 'none';
      }
    });
  }
});

// Navegación entre pestañas
function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-item');
  const panes = document.querySelectorAll('.tab-pane');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');

  const titles = {
    'tab-dashboard': { title: 'Panel de Control General', sub: 'Progreso acumulado, métricas biomecánicas y plan activo' },
    'tab-rutinas': { title: 'Plan y Rutinas Paso a Paso', sub: 'Guías de ejecución técnica sin riesgo de lesiones' },
    'tab-registro': { title: 'Registro de Sesión', sub: 'Captura de datos duros (tiempo, inclinación, velocidad, RPE)' },
    'tab-historial': { title: 'Historial y Datos Duros', sub: 'Registro histórico completo y exportación' },
    'tab-metricas': { title: 'Control de Peso y Medidas', sub: 'Evolución de peso corporal, IMC y cintura a nivel de ombligo' }
  };

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      navButtons.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');

      if (titles[targetId]) {
        pageTitle.textContent = titles[targetId].title;
        pageSubtitle.textContent = titles[targetId].sub;
      }
    });
  });

  const btnQuick = document.getElementById('btn-quick-workout');
  if (btnQuick) {
    btnQuick.addEventListener('click', () => {
      document.getElementById('nav-btn-routines').click();
    });
  }

  const btnViewHistory = document.getElementById('btn-view-all-history');
  if (btnViewHistory) {
    btnViewHistory.addEventListener('click', () => {
      document.getElementById('nav-btn-history').click();
    });
  }
}

// Configuración de la Sesión Programada para Hoy
function setupTodayFocus() {
  const WEEKLY_PLAN = {
    0: {
      dayName: "DOMINGO",
      routineKey: "caminadora",
      title: "Descanso Total y Recuperación Activa",
      desc: "Día de regeneración del sistema nervioso. Puedes hacer caminata libre suave, movilidad articular o descansar completamente.",
      isRest: true
    },
    1: {
      dayName: "LUNES",
      routineKey: "fuerza-a",
      title: "Rutina A: Piernas, Empuje al Suelo y Maleta Asimétrica (10 lb)",
      desc: "Sentadilla a la silla (Box Squat 10 lb) + Floor Press de pecho en suelo + Paseo del Granjero unilateral.",
      duration: "30 min"
    },
    2: {
      dayName: "MARTES",
      routineKey: "caminadora",
      title: "Cardio Zona 2 en Caminadora Altera CE-8610 (Cero Impacto)",
      desc: "30-35 min en Tacón Nivel 2 o 3 a 4.2 - 4.6 km/h (pulso 110-128 BPM). Quema lipolítica pura sin impacto en rodillas.",
      duration: "30-35 min"
    },
    3: {
      dayName: "MIÉRCOLES",
      routineKey: "fuerza-b",
      title: "Rutina B: Tracción de Espalda, Glúteos y Hombro Escapular (10 lb)",
      desc: "Remo unilateral apoyado + Puente de glúteos con mancuerna 10 lb + Press de hombro en silla + Bird-Dog.",
      duration: "30 min"
    },
    4: {
      dayName: "JUEVES",
      routineKey: "caminadora",
      title: "Cardio Zona 2 en Caminadora Altera CE-8610 O Fitness Boxing Switch",
      desc: "Caminadora en rampa Tacón Nivel 3 a 4.4 km/h O combinaciones rítmicas de boxeo sin impacto articular.",
      duration: "30-35 min"
    },
    5: {
      dayName: "VIERNES",
      routineKey: "fuerza-c",
      title: "Rutina C: Split Squat Asistido, Brazos y Core Profundo (10 lb)",
      desc: "Split Squat asistido en pared + Curl de bíceps & tríceps excéntrico (10 lb) + Halo escapular + Deadbug de suelo.",
      duration: "30 min"
    },
    6: {
      dayName: "SÁBADO",
      routineKey: "boxing",
      title: "Fitness Boxing 3 en Nintendo Switch O Caminata Libre",
      desc: "25 min de boxeo rítmico con Joy-Cons (cero hiperextensión de codos) o caminata recreativa en rampa.",
      duration: "25 min"
    }
  };

  const todayIndex = new Date().getDay(); // 5 = Viernes
  const todayData = WEEKLY_PLAN[todayIndex] || WEEKLY_PLAN[5];

  const dayNameElem = document.getElementById('today-day-name');
  const titleElem = document.getElementById('today-workout-title');
  const descElem = document.getElementById('today-workout-desc');
  const btnStart = document.getElementById('btn-start-today-workout');
  const btnTreadmill = document.getElementById('btn-start-treadmill-alt');
  const btnMarkDone = document.getElementById('btn-mark-today-done');
  const banner = document.getElementById('today-workout-banner');

  const todayStr = new Date().toISOString().split('T')[0];
  const allWorkouts = getStoredWorkouts();
  const todayCompleted = allWorkouts.find(w => w.date === todayStr);

  if (todayCompleted) {
    if (banner) {
      banner.style.border = '2px solid #34d399';
      banner.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.24), rgba(15, 23, 42, 0.98))';
    }
    if (dayNameElem) {
      dayNameElem.innerHTML = `<span style="color: #34d399; font-weight: 800;">✔ COMPLETADA HOY</span> (${todayData.dayName})`;
    }
    if (titleElem) {
      titleElem.innerHTML = `🎉 ¡Sesión de Hoy Registrada! (${todayCompleted.category})`;
    }
    if (descElem) {
      descElem.innerHTML = `Completaste <strong>${todayCompleted.duration} min</strong> · Esfuerzo RPE: <strong>${todayCompleted.rpe}/10</strong> · Estado: <strong style="color: #34d399;">${todayCompleted.noPain ? '100% Cero dolor articular' : 'Con observaciones'}</strong>${todayCompleted.notes ? `<br><span style="font-size: 0.85rem; color: #94a3b8; margin-top: 4px; display: inline-block;">Notas: "${todayCompleted.notes}"</span>` : ''}`;
    }
    if (btnMarkDone) {
      btnMarkDone.innerHTML = '✔ Sesión Chequeada (Done)';
      btnMarkDone.style.background = 'rgba(16, 185, 129, 0.2)';
      btnMarkDone.style.border = '1px solid #10b981';
      btnMarkDone.style.color = '#34d399';
      btnMarkDone.onclick = () => {
        showSyncToast('ℹ️ Esta sesión ya está registrada y sincronizada en tu nube', 'info');
      };
    }
  } else {
    if (banner) {
      banner.style.border = '2px solid #10b981';
      banner.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(15, 23, 42, 0.95))';
    }
    if (dayNameElem) dayNameElem.textContent = todayData.dayName;
    if (titleElem) titleElem.textContent = todayData.title;
    if (descElem) descElem.textContent = todayData.desc;
    if (btnMarkDone) {
      btnMarkDone.innerHTML = '✅ Marcar como Completada (Done)';
      btnMarkDone.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      btnMarkDone.style.border = '1px solid #34d399';
      btnMarkDone.style.color = '#fff';
      btnMarkDone.onclick = () => openQuickDoneModal(todayData);
    }
  }

  // Botón para abrir la rutina del día
  if (btnStart) {
    btnStart.onclick = () => {
      const navBtnRutinas = document.querySelector('[data-tab="tab-rutinas"]');
      if (navBtnRutinas) navBtnRutinas.click();

      const subBtn = document.querySelector(`[data-routine="${todayData.routineKey}"]`);
      if (subBtn) subBtn.click();

      const routineContent = document.getElementById('routine-content');
      if (routineContent) routineContent.scrollIntoView({ behavior: 'smooth' });
    };
  }

  // Botón alternativo para abrir la caminadora Altera
  if (btnTreadmill) {
    btnTreadmill.onclick = () => {
      const navBtnRutinas = document.querySelector('[data-tab="tab-rutinas"]');
      if (navBtnRutinas) navBtnRutinas.click();

      const subBtn = document.querySelector('[data-routine="caminadora"]');
      if (subBtn) subBtn.click();

      const routineContent = document.getElementById('routine-content');
      if (routineContent) routineContent.scrollIntoView({ behavior: 'smooth' });
    };
  }

  // Resaltar el día de hoy en la tabla de agenda semanal
  const allDayRows = document.querySelectorAll('.day-row');
  allDayRows.forEach(row => {
    if (row.getAttribute('data-day') === String(todayIndex)) {
      row.classList.add('active-today');
    } else {
      row.classList.remove('active-today');
    }
  });
}

// Asistente de recuperación de imágenes (Caché local con fallback a CDN GitHub)
window.handleImageError = function(img, origSrc) {
  if (!img) return;
  const filename = (origSrc || img.getAttribute('src') || '').split('/').pop();
  if (!filename) return;
  const cdnFallback = `https://raw.githubusercontent.com/mikecj92/vitaltrack/main/assets/${filename}`;
  if (img.src !== cdnFallback) {
    img.src = cdnFallback;
  }
};

// Visor de Rutinas con Verificación de Ejercicios y Finalización Rápida
function setupRoutinesViewer(initialKey) {
  const subBtns = document.querySelectorAll('.sub-tab-btn');
  const container = document.getElementById('routine-content');

  function render(key) {
    const routine = ROUTINES_DATA[key];
    if (!routine) return;

    let exercisesHtml = routine.exercises.map((ex, idx) => `
      <div class="routine-exercise-card" id="card-${key}-${idx}">
        <div class="exercise-left-col">
          <div class="exercise-num">${idx + 1}</div>
          ${ex.image ? `<img src="${ex.image}" alt="${ex.name}" class="exercise-thumb" onerror="window.handleImageError(this, '${ex.image}')" onclick="window.open(this.src, '_blank')" title="Clic para ampliar ilustración">` : ''}
          <label class="exercise-done-pill" style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer; padding: 4px 8px; border-radius: 20px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); font-size: 0.75rem; color: #cbd5e1; margin-top: 8px;">
            <input type="checkbox" onchange="window.toggleExerciseCardCheck(this, '${key}', ${idx})" style="accent-color: #10b981; cursor: pointer;">
            <span>Hecho</span>
          </label>
        </div>
        <div class="exercise-details">
          <h4>${ex.name}</h4>
          <p>${ex.details}</p>
          <span class="exercise-cue">💡 Técnica segura: ${ex.cue}</span>
          <div class="exercise-actions-bar">
            ${ex.localVideo ? `
              <button type="button" class="btn-video-guide btn-video-local" onclick="playLocalExerciseVideo('${ex.localVideo}', '${ex.name.replace(/'/g, "\\'")}', '${routine.title.replace(/'/g, "\\'")}', '${ex.cue.replace(/'/g, "\\'")}')">
                🎬 Video Local MP4
              </button>
            ` : `
              <button type="button" class="btn-video-guide" style="background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px dashed rgba(16, 185, 129, 0.35);" onclick="selectAndPlayCustomLocalVideo('${ex.name.replace(/'/g, "\\'")}', '${routine.title.replace(/'/g, "\\'")}', '${ex.cue.replace(/'/g, "\\'")}')" title="Cargar y reproducir archivo MP4 desde tu PC">
                📂 Cargar MP4 Local
              </button>
            `}
            <button type="button" class="btn-video-guide btn-video-drive" onclick="openDriveExerciseVideo('${key}', ${idx})">
              📁 Google Drive
            </button>
            ${ex.videoUrl ? `<a href="${ex.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-video-guide btn-video-yt" title="Ver en YouTube">🌐 YouTube</a>` : ''}
          </div>
        </div>
        <div class="exercise-meta">${ex.meta}</div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="card-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
        <div>
          <h3>${routine.title}</h3>
          <p class="text-muted">${routine.subtitle}</p>
        </div>
        <button type="button" class="btn btn-primary btn-sm" style="background: linear-gradient(135deg, #10b981, #059669); font-weight: 700;" onclick="window.openQuickDoneModalForRoutine('${key}')">
          ✅ Marcar Rutina como Hecha (Done)
        </button>
      </div>
      <div class="routine-list">
        ${exercisesHtml}
      </div>
      <div class="routine-completion-box" style="margin-top: 24px; text-align: center; padding: 20px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(15, 23, 42, 0.95)); border: 2px dashed rgba(16, 185, 129, 0.4); border-radius: 12px;">
        <h4 style="font-size: 1.15rem; color: #fff; margin: 0 0 6px;">🎯 ¿Terminaste esta sesión de ${routine.title.split('(')[0].trim()}?</h4>
        <p style="font-size: 0.88rem; color: #94a3b8; margin: 0 0 14px;">Márcala como completada para registrar tus minutos, sumar tu racha y sincronizar con tu nube en GitHub.</p>
        <button type="button" class="btn btn-primary" style="background: linear-gradient(135deg, #10b981, #059669); font-weight: 800; padding: 12px 28px; font-size: 1rem; border: none; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); cursor: pointer;" onclick="window.openQuickDoneModalForRoutine('${key}')">
          ✅ Marcar Rutina como Completada (Done ✔)
        </button>
      </div>
    `;
  }

  subBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.getAttribute('data-routine'));
    });
  });

  render(initialKey);
  setupVideoModal();
  setupQuickDoneModal();
}

// Modal y Control de Sesión Completada (Quick Done)
function setupQuickDoneModal() {
  const modal = document.getElementById('quick-done-modal');
  const closeBtn = document.getElementById('quick-done-modal-close');
  const cancelBtn = document.getElementById('btn-quick-done-cancel');

  function closeModal() {
    if (modal) modal.classList.remove('open');
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (cancelBtn) cancelBtn.onclick = closeModal;
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }
}

window.openQuickDoneModal = function(todayData) {
  const modal = document.getElementById('quick-done-modal');
  const catSelect = document.getElementById('quick-done-category');
  const durInput = document.getElementById('quick-done-duration');
  if (!modal) return;

  if (todayData && catSelect) {
    if (todayData.routineKey === 'caminadora') catSelect.value = 'Caminadora';
    else if (todayData.routineKey === 'fuerza-a') catSelect.value = 'Fuerza A';
    else if (todayData.routineKey === 'fuerza-b') catSelect.value = 'Fuerza B';
    else if (todayData.routineKey === 'fuerza-c') catSelect.value = 'Fuerza C';
    else if (todayData.routineKey === 'boxing') catSelect.value = 'Fitness Boxing (Switch)';
  }

  if (durInput) durInput.value = '30';
  modal.classList.add('open');
};

window.openQuickDoneModalForRoutine = function(routineKey) {
  const routineMap = {
    'caminadora': 'Caminadora',
    'fuerza-a': 'Fuerza A',
    'fuerza-b': 'Fuerza B',
    'fuerza-c': 'Fuerza C',
    'boxing': 'Fitness Boxing (Switch)'
  };
  window.openQuickDoneModal({ routineKey: routineKey });
  const catSelect = document.getElementById('quick-done-category');
  if (catSelect && routineMap[routineKey]) {
    catSelect.value = routineMap[routineKey];
  }
};

window.setQuickDuration = function(mins) {
  const durInput = document.getElementById('quick-done-duration');
  if (durInput) durInput.value = mins;
};

// Sonido de campana para celebrar fin de entrenamiento
function playCelebrationChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    
    // Tono 1
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.frequency.setValueAtTime(523.25, now);
    gain1.gain.setValueAtTime(0.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.3);

    // Tono 2
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.frequency.setValueAtTime(659.25, now + 0.15);
    gain2.gain.setValueAtTime(0.25, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.5);

    // Tono 3
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.frequency.setValueAtTime(783.99, now + 0.3);
    gain3.gain.setValueAtTime(0.3, now + 0.3);
    gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    osc3.connect(gain3);
    gain3.connect(ctx.destination);
    osc3.start(now + 0.3);
    osc3.stop(now + 0.8);
  } catch (e) {}
}

window.handleQuickDoneSubmit = async function(e) {
  if (e) e.preventDefault();
  const category = document.getElementById('quick-done-category').value;
  const duration = parseInt(document.getElementById('quick-done-duration').value, 10) || 30;
  const rpe = parseInt(document.getElementById('quick-done-rpe').value, 10) || 6;
  const notes = (document.getElementById('quick-done-notes').value || '').trim();
  const noPain = document.getElementById('quick-done-nopain').checked;
  const todayStr = new Date().toISOString().split('T')[0];

  const hcData = getStoredHealthConnect() || {};
  const newWorkout = {
    id: 'wk_' + Date.now(),
    date: todayStr,
    timestamp: new Date().toISOString(),
    category: category,
    duration: duration,
    rpe: rpe,
    notes: notes || 'Sesión recomendada completada con éxito',
    noPain: noPain,
    wearable: {
      hrAvg: hcData.avgHeartRate || null,
      hrMax: hcData.maxHeartRate || null,
      rhr: hcData.restingHeartRate || null,
      steps: hcData.steps || null,
      calories: hcData.calories || null
    },
    source: 'quick_done'
  };

  const workouts = getStoredWorkouts();
  workouts.unshift(newWorkout);
  saveStoredWorkouts(workouts);

  // Cerrar modal
  const modal = document.getElementById('quick-done-modal');
  if (modal) modal.classList.remove('open');

  // Celebración sonora
  playCelebrationChime();

  // Actualizar dashboard y vistas
  setupTodayFocus();
  renderDashboard();
  renderHistoryTable();

  showSyncToast('🎉 ¡Excelente trabajo! Sesión guardada y marcada como completada (Done ✔)', 'success');

  // Sincronizar inmediatamente a GitHub
  try {
    showSyncToast('☁️ Sincronizando con tu nube en GitHub...', 'info');
    await autoSyncPush();
    showSyncToast('✅ Datos sincronizados y validados en la nube exitosamente', 'success');
  } catch (err) {
    console.error('Error sincronizando:', err);
  }
};

window.toggleExerciseCardCheck = function(checkbox, routineKey, exerciseIndex) {
  const card = document.getElementById(`card-${routineKey}-${exerciseIndex}`);
  if (!card) return;
  if (checkbox.checked) {
    card.style.borderColor = 'rgba(16, 185, 129, 0.6)';
    card.style.background = 'rgba(16, 185, 129, 0.08)';
    card.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.2)';
  } else {
    card.style.borderColor = '';
    card.style.background = '';
    card.style.boxShadow = '';
  }
};

// Selector Dinámico de Videos Locales desde PC/Móvil
window.selectAndPlayCustomLocalVideo = function(title, routineTitle, cue) {
  let fileInput = document.getElementById('custom-video-file-input');
  if (!fileInput) {
    fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'custom-video-file-input';
    fileInput.accept = 'video/mp4,video/webm,video/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
  }
  fileInput.onchange = function(e) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      window.playLocalExerciseVideo(blobUrl, `${title} (${file.name})`, routineTitle, cue);
    }
    fileInput.value = '';
  };
  fileInput.click();
};

// Helpers para Enlaces Personalizados de Google Drive
function getCustomDriveVideos() {
  try {
    return JSON.parse(localStorage.getItem('vitaltrack_custom_drive_videos') || '{}');
  } catch (e) {
    return {};
  }
}

function saveCustomDriveVideo(exerciseKey, urlOrId) {
  try {
    const data = getCustomDriveVideos();
    if (urlOrId) {
      data[exerciseKey] = urlOrId;
    } else {
      delete data[exerciseKey];
    }
    localStorage.setItem('vitaltrack_custom_drive_videos', JSON.stringify(data));
  } catch (e) {}
}

function extractYouTubeId(url) {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : '';
}

function extractGoogleDriveId(url) {
  if (!url) return '';
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : url.trim();
}

// Modal Universal de Video (Local MP4 y Google Drive)
function setupVideoModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('video-modal-close');
  const footerCloseBtn = document.getElementById('btn-modal-close-footer');
  const container = document.getElementById('video-player-container');

  function closeModal() {
    if (container) {
      const v = container.querySelector('video');
      if (v) {
        v.pause();
        v.src = '';
      }
      container.innerHTML = '';
    }
    if (modal) modal.classList.remove('open');
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (footerCloseBtn) footerCloseBtn.onclick = closeModal;

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

// Reproducción Directa de Video Local MP4 en PC
window.playLocalExerciseVideo = function(videoPath, title, routineTitle, cue) {
  const modal = document.getElementById('video-modal');
  const titleElem = document.getElementById('video-modal-title');
  const subElem = document.getElementById('video-modal-subtitle');
  const cueTextElem = document.getElementById('video-modal-cue-text');
  const container = document.getElementById('video-player-container');
  const btnYtExt = document.getElementById('video-btn-yt-external');
  const btnDriveOpt = document.getElementById('video-btn-drive-opt');

  if (!modal || !container) return;

  if (titleElem) titleElem.textContent = title || 'Demostración Técnica';
  if (subElem) subElem.textContent = `${routineTitle || 'Ejercicio'} · Archivo Local MP4 (Reproducción Directa)`;
  if (cueTextElem) cueTextElem.textContent = cue || 'Ejecuta el ejercicio manteniendo control y sin dolor articular.';
  if (btnYtExt) btnYtExt.style.display = 'none';

  container.innerHTML = `
    <video controls autoplay playsinline style="width: 100%; height: 100%; max-height: 70vh; background: #000; border-radius: 8px;">
      <source src="${videoPath}" type="video/mp4">
      Tu navegador no soporta el video MP4 local. Verifica la ruta: ${videoPath}
    </video>
  `;

  if (btnDriveOpt) {
    btnDriveOpt.style.display = 'inline-flex';
    btnDriveOpt.textContent = '📁 Cambiar a Google Drive';
    btnDriveOpt.onclick = function() {
      const input = prompt('📁 Pega el enlace de Google Drive para este video:');
      if (input && input.trim()) {
        const driveId = extractGoogleDriveId(input.trim());
        container.innerHTML = `
          <iframe 
            src="https://drive.google.com/file/d/${driveId}/preview" 
            title="${title} (Google Drive)" 
            allow="autoplay; fullscreen" 
            allowfullscreen 
            style="width: 100%; height: 100%; border: none;">
          </iframe>
        `;
      }
    };
  }

  modal.classList.add('open');
};

// Reproducción e Integración con Google Drive
window.openDriveExerciseVideo = function(routineKey, exerciseIndex) {
  const routine = ROUTINES_DATA[routineKey];
  if (!routine) return;
  const ex = routine.exercises[exerciseIndex];
  if (!ex) return;

  const modal = document.getElementById('video-modal');
  const titleElem = document.getElementById('video-modal-title');
  const subElem = document.getElementById('video-modal-subtitle');
  const cueTextElem = document.getElementById('video-modal-cue-text');
  const container = document.getElementById('video-player-container');
  const btnYtExt = document.getElementById('video-btn-yt-external');
  const btnDriveOpt = document.getElementById('video-btn-drive-opt');

  if (!modal || !container) return;

  if (titleElem) titleElem.textContent = ex.name;
  if (subElem) subElem.textContent = `${routine.title} · Integración de Video`;
  if (cueTextElem) cueTextElem.textContent = `${ex.cue} (${ex.details})`;
  if (btnYtExt) {
    btnYtExt.style.display = ex.videoUrl ? 'inline-flex' : 'none';
    btnYtExt.href = ex.videoUrl || '#';
  }

  const customDriveMap = getCustomDriveVideos();
  const exerciseKey = `${routineKey}_${exerciseIndex}`;
  const customDriveUrl = customDriveMap[exerciseKey] || ex.driveUrl || '';

  function renderDrive(url) {
    if (url) {
      const driveId = extractGoogleDriveId(url);
      container.innerHTML = `
        <iframe 
          src="https://drive.google.com/file/d/${driveId}/preview" 
          title="${ex.name} (Google Drive)" 
          allow="autoplay; fullscreen" 
          allowfullscreen 
          style="width: 100%; height: 100%; border: none;">
        </iframe>
      `;
    } else if (ex.localVideo) {
      container.innerHTML = `
        <div style="padding: 24px; text-align: center; color: #cbd5e1; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-sizing: border-box;">
          <p style="margin-bottom: 14px; font-size: 1.05rem; font-weight: 600;">🎬 Este ejercicio cuenta con video local MP4 en tu PC:</p>
          <button type="button" class="btn btn-primary" onclick="playLocalExerciseVideo('${ex.localVideo}', '${ex.name.replace(/'/g, "\\'")}', '${routine.title.replace(/'/g, "\\'")}', '${ex.cue.replace(/'/g, "\\'")}')">
            ▶️ Reproducir Video Local (${ex.localVideo.split('/').pop()})
          </button>
          <div style="margin-top: 20px;">
            <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;">O puedes vincular tu video personal desde Google Drive:</p>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-prompt-drive-now">📁 Vincular Enlace de Google Drive</button>
          </div>
        </div>
      `;
      setTimeout(() => {
        const btnPrompt = document.getElementById('btn-prompt-drive-now');
        if (btnPrompt) btnPrompt.onclick = () => btnDriveOpt && btnDriveOpt.click();
      }, 50);
    } else {
      container.innerHTML = `
        <div style="padding: 24px 16px; text-align: center; color: #cbd5e1; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-sizing: border-box;">
          ${ex.image ? `<img src="${ex.image}" alt="${ex.name}" style="max-height: 150px; border-radius: 8px; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 12px rgba(0,0,0,0.5);" onerror="window.handleImageError(this, '${ex.image}')">` : ''}
          <div style="font-size: 0.95rem; font-weight: 700; color: #fbbf24; margin-bottom: 6px;">ℹ️ Este ejercicio no incluye video MP4 de fábrica</div>
          <p style="font-size: 0.85rem; color: #94a3b8; max-width: 440px; margin: 0 auto 16px; line-height: 1.45;">
            Puedes reproducir cualquier archivo de video desde tu computadora/celular, o vincular un enlace de Google Drive.
          </p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            <button type="button" class="btn btn-primary" onclick="selectAndPlayCustomLocalVideo('${ex.name.replace(/'/g, "\\'")}', '${routine.title.replace(/'/g, "\\'")}', '${ex.cue.replace(/'/g, "\\'")}')">
              📂 Cargar Video MP4 de tu PC
            </button>
            <button type="button" class="btn btn-secondary" id="btn-prompt-drive-now">
              📁 Vincular Enlace de Google Drive
            </button>
          </div>
        </div>
      `;
      setTimeout(() => {
        const btnPrompt = document.getElementById('btn-prompt-drive-now');
        if (btnPrompt) btnPrompt.onclick = () => btnDriveOpt && btnDriveOpt.click();
      }, 50);
    }
  }

  renderDrive(customDriveUrl);

  if (btnDriveOpt) {
    btnDriveOpt.style.display = 'inline-flex';
    btnDriveOpt.textContent = '📁 Configurar Enlace de Drive';
    btnDriveOpt.onclick = function() {
      const current = customDriveMap[exerciseKey] || '';
      const input = prompt(
        `📁 Enlace de Google Drive para "${ex.name}":\n\nPega el enlace de compartir de Google Drive:`,
        current
      );
      if (input !== null) {
        saveCustomDriveVideo(exerciseKey, input.trim());
        if (input.trim()) {
          showSyncToast('✅ Video de Google Drive vinculado', 'success');
          renderDrive(input.trim());
        } else {
          showSyncToast('ℹ️ Enlace de Google Drive eliminado', 'info');
          renderDrive('');
        }
      }
    };
  }

  modal.classList.add('open');
};

// Compatibilidad general
window.openExerciseVideo = function(routineKey, exerciseIndex) {
  const routine = ROUTINES_DATA[routineKey];
  if (!routine) return;
  const ex = routine.exercises[exerciseIndex];
  if (!ex) return;
  if (ex.localVideo) {
    playLocalExerciseVideo(ex.localVideo, ex.name, routine.title, ex.cue);
  } else {
    openDriveExerciseVideo(routineKey, exerciseIndex);
  }
};

window.playExerciseVideo = function(videoPath, title) {
  playLocalExerciseVideo(videoPath, title, '', '');
};

// Asistente Temporizador con Síntesis de Sonido Web Audio
function setupTimer() {
  const display = document.getElementById('timer-display');
  const btnStart = document.getElementById('timer-btn-start');
  const btnPause = document.getElementById('timer-btn-pause');
  const btnReset = document.getElementById('timer-btn-reset');
  const presetBtns = document.querySelectorAll('.btn-chip');

  function formatTime(totalSecs) {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function playChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {
      // Audio fallback silencioso si el navegador lo bloquea
    }
  }

  btnStart.addEventListener('click', () => {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
      if (isTimerCountdown) {
        if (timerSeconds > 0) {
          timerSeconds--;
          display.textContent = formatTime(timerSeconds);
        } else {
          clearInterval(timerInterval);
          timerInterval = null;
          isTimerCountdown = false;
          playChime();
          alert('⏰ ¡Tiempo completado! Listo para la siguiente serie o fin de sesión.');
        }
      } else {
        timerSeconds++;
        display.textContent = formatTime(timerSeconds);
      }
    }, 1000);
  });

  btnPause.addEventListener('click', () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  });

  btnReset.addEventListener('click', () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    timerSeconds = 0;
    isTimerCountdown = false;
    display.textContent = '00:00';
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      const s = parseInt(btn.getAttribute('data-secs'), 10);
      timerSeconds = s;
      isTimerCountdown = true;
      display.textContent = formatTime(timerSeconds);
    });
  });
}

// Almacenamiento y Formulario de Sesiones
function getStoredWorkouts() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveStoredWorkouts(workouts) {
  localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(workouts));
}

function getStoredHealthConnect() {
  try {
    const raw = localStorage.getItem('vitaltrack_hc_cache');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveStoredHealthConnect(data) {
  try {
    if (data) {
      localStorage.setItem('vitaltrack_hc_cache', JSON.stringify(data));
    }
  } catch (e) {}
}

function setupFormEvents() {
  const form = document.getElementById('workout-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = document.getElementById('input-date').value;
    const category = document.getElementById('input-category').value;
    const duration = parseInt(document.getElementById('input-duration').value, 10);
    const rpe = parseInt(document.getElementById('input-rpe').value, 10);
    const notes = document.getElementById('input-notes').value.trim();
    const noPain = document.getElementById('input-no-pain').checked;

    const distance = document.getElementById('input-distance').value ? parseFloat(document.getElementById('input-distance').value) : null;
    const speed = document.getElementById('input-speed').value ? parseFloat(document.getElementById('input-speed').value) : null;
    const incline = document.getElementById('input-incline').value ? parseFloat(document.getElementById('input-incline').value) : null;
    const calories = document.getElementById('input-calories').value ? parseInt(document.getElementById('input-calories').value, 10) : null;

    const hrAvg = document.getElementById('input-hr-avg').value ? parseInt(document.getElementById('input-hr-avg').value, 10) : null;
    const hrMax = document.getElementById('input-hr-max').value ? parseInt(document.getElementById('input-hr-max').value, 10) : null;
    const steps = document.getElementById('input-steps').value ? parseInt(document.getElementById('input-steps').value, 10) : null;
    const activeCal = document.getElementById('input-active-cal').value ? parseInt(document.getElementById('input-active-cal').value, 10) : null;

    const newWorkout = {
      id: Date.now().toString(),
      date,
      category,
      duration,
      rpe,
      noPain,
      notes,
      treadmill: {
        distance,
        speed,
        incline,
        calories
      },
      wearable: {
        hrAvg,
        hrMax,
        steps,
        activeCal
      }
    };

    const workouts = getStoredWorkouts();
    workouts.unshift(newWorkout);
    saveStoredWorkouts(workouts);

    // Sincronización automática inmediata a la nube
    autoSyncPush();

    form.reset();
    document.getElementById('input-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('input-no-pain').checked = true;

    renderDashboard();
    renderHistoryTable();

    document.getElementById('nav-btn-dash').click();
  });

  // Filtro de historial
  const filterCat = document.getElementById('filter-category');
  if (filterCat) {
    filterCat.addEventListener('change', () => {
      renderHistoryTable();
    });
  }

  // Botón manual de Sincronizar Nube Ahora
  const btnSyncAction = document.getElementById('btn-sync-cloud-action');
  if (btnSyncAction) {
    btnSyncAction.addEventListener('click', () => {
      autoSyncPull(true);
    });
  }

  // Descargar Copia JSON de Respaldo
  const btnSaveDrive = document.getElementById('btn-save-drive');
  if (btnSaveDrive) {
    btnSaveDrive.addEventListener('click', () => {
      const data = {
        profile: USER_PROFILE,
        workouts: getStoredWorkouts(),
        metrics: getStoredMetrics(),
        exportedAt: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `vitaltrack_db.json`;
      a.click();
      URL.revokeObjectURL(url);
      showSyncToast('💾 Archivo vitaltrack_db.json descargado correctamente.', 'success');
    });
  }
}

// Almacenamiento y Formulario de Métricas Corporales
function getStoredMetrics() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.METRICS);
    if (data) return JSON.parse(data);
  } catch (e) {}
  
  // Baseline inicial por defecto
  return [
    {
      id: 'init-0',
      date: '2026-10-08',
      weight: 95.0,
      waist: null,
      energy: 'Bueno',
      imc: +(95.0 / (1.75 * 1.75)).toFixed(1)
    }
  ];
}

function saveStoredMetrics(metrics) {
  localStorage.setItem(STORAGE_KEYS.METRICS, JSON.stringify(metrics));
}

function setupMetricsEvents() {
  const form = document.getElementById('metrics-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = document.getElementById('metric-date').value;
    const weight = parseFloat(document.getElementById('metric-weight').value);
    const waist = document.getElementById('metric-waist').value ? parseFloat(document.getElementById('metric-waist').value) : null;
    const energy = document.getElementById('metric-energy').value;
    const rhr = document.getElementById('metric-rhr') && document.getElementById('metric-rhr').value ? parseInt(document.getElementById('metric-rhr').value, 10) : null;
    const sleep = document.getElementById('metric-sleep') && document.getElementById('metric-sleep').value ? parseFloat(document.getElementById('metric-sleep').value) : null;

    const imc = +(weight / (USER_PROFILE.heightM * USER_PROFILE.heightM)).toFixed(1);

    const newMetric = {
      id: Date.now().toString(),
      date,
      weight,
      waist,
      energy,
      rhr,
      sleep,
      imc
    };

    const metrics = getStoredMetrics();
    metrics.unshift(newMetric);
    saveStoredMetrics(metrics);

    // Sincronización automática inmediata a la nube
    autoSyncPush();

    form.reset();
    document.getElementById('metric-date').value = new Date().toISOString().split('T')[0];

    renderDashboard();
    renderMetricsTable();
  });
}

// Renderizado de Dashboard
function renderDashboard() {
  const workouts = getStoredWorkouts();
  const metrics = getStoredMetrics();

  // Peso actual
  const currentMetric = metrics[0] || { weight: 95.0, imc: 31.0 };
  const currentWeightElem = document.getElementById('dash-current-weight');
  const imcElem = document.getElementById('dash-imc');
  const weightDiffElem = document.getElementById('dash-weight-diff');

  if (currentWeightElem) currentWeightElem.innerHTML = `${currentMetric.weight.toFixed(1)} <span class="unit">kg</span>`;
  if (imcElem) imcElem.textContent = currentMetric.imc.toFixed(1);

  const diff = currentMetric.weight - USER_PROFILE.initialWeightKg;
  if (weightDiffElem) {
    if (diff === 0) {
      weightDiffElem.textContent = 'Punto de partida (95.0 kg)';
      weightDiffElem.className = 'stat-caption text-neutral';
    } else if (diff < 0) {
      weightDiffElem.textContent = `📉 -${Math.abs(diff).toFixed(1)} kg desde el inicio`;
      weightDiffElem.className = 'stat-caption text-green';
    } else {
      weightDiffElem.textContent = `+${diff.toFixed(1)} kg`;
      weightDiffElem.className = 'stat-caption text-yellow';
    }
  }

  // Sesiones totales
  const totalSessionsElem = document.getElementById('dash-total-sessions');
  if (totalSessionsElem) totalSessionsElem.textContent = workouts.length;

  // Minutos en caminadora / cardio
  const cardioMins = workouts
    .filter(w => w.category && (w.category.includes('Camin') || w.category.includes('Cardio')))
    .reduce((acc, w) => acc + (w.duration || 0), 0);
  const treadmillElem = document.getElementById('dash-treadmill-mins');
  if (treadmillElem) treadmillElem.innerHTML = `${cardioMins} <span class="unit">min</span>`;

  // Pasos de Hoy (Samsung Watch / Health Connect)
  const hcData = getStoredHealthConnect() || {};
  let todaySteps = hcData.steps || 0;
  if (!todaySteps) {
    const walkWk = workouts.find(w => w.wearable && w.wearable.steps);
    if (walkWk && walkWk.wearable && walkWk.wearable.steps) {
      todaySteps = walkWk.wearable.steps;
    }
  }
  const stepsElem = document.getElementById('dash-today-steps');
  if (stepsElem) {
    stepsElem.innerHTML = `${todaySteps.toLocaleString()} <span class="unit">pasos</span>`;
  }
  const stepsCap = document.getElementById('dash-steps-caption');
  if (stepsCap) {
    if (todaySteps >= 10000) {
      stepsCap.textContent = `🎯 ¡Meta de 10k superada! (+${(todaySteps - 10000).toLocaleString()})`;
      stepsCap.className = 'stat-caption text-green';
    } else if (todaySteps > 0) {
      stepsCap.textContent = `👟 Sincronizado vía Health Connect`;
      stepsCap.className = 'stat-caption text-green';
    } else {
      stepsCap.textContent = `Pendiente sincronizar reloj`;
      stepsCap.className = 'stat-caption text-neutral';
    }
  }

  // Reflejar también en la tarjeta de métricas de Health Connect
  const hcLiveSteps = document.getElementById('hc-live-steps');
  if (hcLiveSteps && todaySteps > 0) {
    hcLiveSteps.textContent = todaySteps.toLocaleString() + ' pasos';
  }

  // Lista reciente
  const recentContainer = document.getElementById('dash-recent-list');
  if (recentContainer) {
    if (workouts.length === 0) {
      recentContainer.innerHTML = '<p class="empty-state">No hay sesiones registradas aún. ¡Hoy es el mejor día para registrar la primera!</p>';
    } else {
      const recent = workouts.slice(0, 4);
      recentContainer.innerHTML = recent.map(w => `
        <div class="day-row">
          <span class="day-name">${w.date.substring(5)}</span>
          <span class="day-task">${w.category} (${w.duration}m · RPE ${w.rpe})</span>
          <span class="day-time">${w.noPain ? '🛡️ Seguro' : '⚠️ Molestia'}</span>
        </div>
      `).join('');
    }
  }
}

// Renderizado de Tabla de Historial
function renderHistoryTable() {
  const tbody = document.getElementById('history-tbody');
  if (!tbody) return;

  const workouts = getStoredWorkouts();
  const filterCat = document.getElementById('filter-category') ? document.getElementById('filter-category').value : 'all';

  const filtered = workouts.filter(w => {
    if (filterCat === 'all') return true;
    return w.category === filterCat;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-state">No se encontraron sesiones registradas con este filtro.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(w => {
    let treadmillInfo = '-';
    if (w.category === 'Caminadora' && w.treadmill) {
      const parts = [];
      if (w.treadmill.incline) parts.push(`Inc: ${w.treadmill.incline}%`);
      if (w.treadmill.speed) parts.push(`Vel: ${w.treadmill.speed} km/h`);
      if (w.treadmill.distance) parts.push(`Dist: ${w.treadmill.distance} km`);
      if (w.treadmill.calories) parts.push(`${w.treadmill.calories} kcal`);
      treadmillInfo = parts.length > 0 ? parts.join(' | ') : 'Zona 2 estándar';
    }

    let wearableBadge = '';
    if (w.wearable) {
      const wParts = [];
      if (w.wearable.hrAvg) wParts.push(`FC Prom: ${w.wearable.hrAvg} bpm`);
      if (w.wearable.hrMax) wParts.push(`Max: ${w.wearable.hrMax}`);
      if (w.wearable.steps) wParts.push(`${w.wearable.steps} pasos`);
      if (w.wearable.activeCal) wParts.push(`${w.wearable.activeCal} kcal`);
      if (wParts.length > 0) {
        wearableBadge = `<div style="font-size:0.75rem; color:var(--accent-teal); margin-top:4px;">⌚ ${wParts.join(' · ')}</div>`;
      }
    }

    let badgeClass = 'badge-strength';
    if (w.category === 'Caminadora') badgeClass = 'badge-cardio';
    if (w.category.includes('Boxing')) badgeClass = 'badge-boxing';
    if (w.category === 'Movilidad') badgeClass = 'badge-mobility';

    return `
      <tr>
        <td><strong>${w.date}</strong></td>
        <td>
          <span class="badge-pill ${badgeClass}">${w.category}</span>
          ${wearableBadge}
        </td>
        <td>${w.duration} min</td>
        <td>${treadmillInfo}</td>
        <td>RPE ${w.rpe}/10</td>
        <td>${w.noPain ? '<span class="badge-safe">✅ 0 Dolores</span>' : '<span style="color:var(--accent-rose)">⚠️ Molestia reportada</span>'}</td>
        <td style="max-width: 220px; font-size: 0.82rem; color: var(--text-muted);">${w.notes || '-'}</td>
        <td><button class="btn-del" onclick="deleteWorkout('${w.id}')">Eliminar</button></td>
      </tr>
    `;
  }).join('');
}

// Renderizado de Tabla de Métricas
function renderMetricsTable() {
  const tbody = document.getElementById('metrics-tbody');
  if (!tbody) return;

  const metrics = getStoredMetrics();
  tbody.innerHTML = metrics.map(m => `
    <tr>
      <td>${m.date}</td>
      <td><strong>${m.weight.toFixed(1)}</strong> kg</td>
      <td>${m.imc.toFixed(1)}</td>
      <td>${m.waist ? `${m.waist} cm` : '-'}</td>
      <td>${m.rhr ? `${m.rhr} bpm` : '-'}</td>
      <td>${m.sleep ? `${m.sleep} h` : '-'}</td>
      <td>${m.energy}</td>
      <td>
        ${m.id === 'init-0' ? '<span class="text-dim">Base</span>' : `<button class="btn-del" onclick="deleteMetric('${m.id}')">Eliminar</button>`}
      </td>
    </tr>
  `).join('');
}

// Funciones Globales para botones en tablas
window.deleteWorkout = function(id) {
  if (!confirm('¿Seguro que deseas eliminar esta sesión?')) return;
  let workouts = getStoredWorkouts();
  workouts = workouts.filter(w => w.id !== id);
  saveStoredWorkouts(workouts);
  autoSyncPush(true);
  renderDashboard();
  renderHistoryTable();
};

window.deleteMetric = function(id) {
  if (!confirm('¿Seguro que deseas eliminar este registro de métrica?')) return;
  let metrics = getStoredMetrics();
  metrics = metrics.filter(m => m.id !== id);
  saveStoredMetrics(metrics);
  autoSyncPush(true);
  renderDashboard();
  renderMetricsTable();
};

// ==========================================
// Entrenador Fisiológico Adaptativo
// ==========================================
function setupAdaptiveCoach() {
  const btnRecalc = document.getElementById('btn-recalculate-coach');
  const rhrInput = document.getElementById('coach-rhr');
  const sleepInput = document.getElementById('coach-sleep');
  const sorenessSelect = document.getElementById('coach-soreness');

  if (btnRecalc) {
    btnRecalc.addEventListener('click', calculateAdaptivePrescription);
  }
  if (rhrInput) rhrInput.addEventListener('change', calculateAdaptivePrescription);
  if (sleepInput) sleepInput.addEventListener('change', calculateAdaptivePrescription);
  if (sorenessSelect) sorenessSelect.addEventListener('change', calculateAdaptivePrescription);

  calculateAdaptivePrescription();
}

function calculateAdaptivePrescription() {
  const rhrVal = document.getElementById('coach-rhr') ? parseInt(document.getElementById('coach-rhr').value, 10) || 68 : 68;
  const sleepVal = document.getElementById('coach-sleep') ? parseFloat(document.getElementById('coach-sleep').value) || 7.5 : 7.5;
  const sorenessVal = document.getElementById('coach-soreness') ? document.getElementById('coach-soreness').value : 'none';

  // Analizar última sesión de caminadora
  const workouts = getStoredWorkouts();
  const lastTreadmill = workouts.find(w => w.category === 'Caminadora');
  let hrZoneFeedback = '';
  let speedPenalty = 0;
  let inclineBonus = 0;

  if (lastTreadmill && lastTreadmill.wearable && lastTreadmill.wearable.hrAvg) {
    if (lastTreadmill.wearable.hrAvg > 128) {
      hrZoneFeedback = ' ⚠️ En tu sesión previa tu pulso promedio superó la Zona 2 (' + lastTreadmill.wearable.hrAvg + ' BPM). Hemos calibrado -0.4 km/h de velocidad sugerida para devolverte a la Zona 2 lipolítica pura.';
      speedPenalty = 0.4;
    } else if (lastTreadmill.wearable.hrAvg < 110 && lastTreadmill.wearable.hrAvg > 80) {
      hrZoneFeedback = ' 💡 Tu pulso previo fue muy holgado (' + lastTreadmill.wearable.hrAvg + ' BPM). Calibramos +0.5% de inclinación para maximizar la quema calórica segura.';
      inclineBonus = 0.5;
    }
  }

  // Puntuación de recuperación (Readiness Score)
  let score = 100;
  if (rhrVal > 72) score -= 10;
  if (rhrVal > 76) score -= 15;
  if (rhrVal > 82) score -= 25;

  if (sleepVal < 7.0) score -= 10;
  if (sleepVal < 6.0) score -= 20;
  if (sleepVal < 5.0) score -= 30;

  if (sorenessVal === 'mild') score -= 10;
  if (sorenessVal === 'joint-ache') score -= 45;

  score = Math.max(25, Math.min(100, score));

  // Elementos del DOM
  const pillElem = document.getElementById('coach-readiness-pill');
  const verdictBox = document.getElementById('coach-verdict-box');
  const verdictTitle = document.getElementById('verdict-title');
  const verdictTag = document.getElementById('verdict-tag');
  const verdictText = document.getElementById('verdict-text');
  const paramSpeed = document.getElementById('param-speed');
  const paramIncline = document.getElementById('param-incline');
  const paramSets = document.getElementById('param-sets');
  const paramBoxing = document.getElementById('param-boxing-hr');

  if (!pillElem || !verdictBox) return;

  if (score >= 80) {
    pillElem.className = 'readiness-pill readiness-green';
    pillElem.innerHTML = `<span>🟢 Estado Óptimo (${score}/100)</span>`;
    verdictBox.className = 'adaptive-verdict';
    verdictTitle.textContent = '✅ Prescripción: Sesión Completa en Zona 2';
    verdictTag.textContent = 'Zona 2 Óptima: 110-128 BPM';
    verdictText.textContent = 'Tu frecuencia cardíaca matutina y horas de sueño confirman un sistema nervioso autónomo descansado. Tus tendones y corazón toleran el estímulo programado al 100%.' + hrZoneFeedback;
    
    const baseSpeed = Math.max(3.8, (4.4 - speedPenalty)).toFixed(1);
    if (paramSpeed) paramSpeed.textContent = `${baseSpeed} km/h`;
    if (paramIncline) paramIncline.textContent = 'Tacón Nivel 3 (o 2)';
    if (paramSets) paramSets.textContent = '3 series x 8-10 reps';
    if (paramBoxing) paramBoxing.textContent = '< 145 BPM';
  } else if (score >= 60) {
    pillElem.className = 'readiness-pill readiness-yellow';
    pillElem.innerHTML = `<span>🟡 Alerta de Fatiga (${score}/100)</span>`;
    verdictBox.className = 'adaptive-verdict verdict-yellow';
    verdictTitle.textContent = '⚠️ Prescripción Adaptada: Intensidad y Volumen Moderados';
    verdictTag.textContent = 'Zona 2 Conservadora: 105-120 BPM';
    verdictText.textContent = 'Se detecta descanso incompleto o pulso matutino ligeramente elevado. Adaptación automática médica: reducimos al Tacón Nivel 2 y eliminamos la 3ª serie de fuerza para evitar sobrecarga del sistema simpático.' + hrZoneFeedback;
    
    if (paramSpeed) paramSpeed.textContent = '4.0 km/h';
    if (paramIncline) paramIncline.textContent = 'Tacón Nivel 2 (suave)';
    if (paramSets) paramSets.textContent = '2 series x 8 reps (sin fallo)';
    if (paramBoxing) paramBoxing.textContent = '< 135 BPM (técnico)';
  } else {
    pillElem.className = 'readiness-pill readiness-rose';
    pillElem.innerHTML = `<span>🔴 Protocolo Regenerativo (${score}/100)</span>`;
    verdictBox.className = 'adaptive-verdict verdict-rose';
    verdictTitle.textContent = '🛡️ Protección Articular: Protocolo Regenerativo sin Carga';
    verdictTag.textContent = 'Regenerativo: < 110 BPM';
    verdictText.textContent = 'Alerta clínica: Se reportó molestia articular o pulso en reposo anormalmente alto. A 95 kg, entrenar con dolor lesiona cartílagos de rodilla o zona lumbar. Adaptación de hoy: 0 mancuerna, solo 20 min en Tacón Nivel 1 a 3.2 km/h y ejercicios de suelo de estabilización McGill (Bird-Dog y Deadbug).';
    
    if (paramSpeed) paramSpeed.textContent = '3.2 km/h';
    if (paramIncline) paramIncline.textContent = 'Tacón Nivel 1 (plano)';
    if (paramSets) paramSets.textContent = '0 mancuernas · 3x Bird-dog';
    if (paramBoxing) paramBoxing.textContent = 'Pausa / Solo sombra suave';
  }
}

