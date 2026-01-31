var CACHE_NAME = 'mood-tracker-v1';
var urlsToCache = [
  './',
  './index.html',
  // './manifest.json', // ファイルを作ったらコメントアウト外す
  // './icon-192.png'   // アイコンがあれば追加
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
