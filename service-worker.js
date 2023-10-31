// Install the service worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pwa-example-v1").then(cache => {
            return cache.addAll([
                "/",
                "index.html",
                "style.css",
                "script.js",
                "icon.png"
            ]);
        })
    );
});

// Serve cached resources
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
