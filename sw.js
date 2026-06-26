const CACHE_NAME = "nyimbo-cache-v1";
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("nyimbo-cache").then(cache =>
      cache.addAll(["./"])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});