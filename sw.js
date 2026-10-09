const CACHE_NAME = 'vitaltrack-v1.3.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './version.json',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './assets/treadmill.jpg',
  './assets/box_squat.jpg',
  './assets/floor_press.jpg',
  './assets/single_arm_row.jpg',
  './assets/bird_dog.jpg',
  './assets/boxing_punch.jpg',
  './assets/calf_raises.jpg',
  './assets/glute_bridge.jpg',
  './assets/shoulder_press.jpg',
  './assets/split_squat.jpg',
  './assets/bicep_curl.jpg',
  './assets/dumbbell_halo.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Estrategia Network-First para datos frescos, con respaldo en caché offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // No interceptar llamadas API de GitHub
  if (event.request.url.includes('api.github.com') || event.request.url.includes('youtube.com') || event.request.url.includes('drive.google.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => cached || caches.match('./index.html'));
      })
  );
});
