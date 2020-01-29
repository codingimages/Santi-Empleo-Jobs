var cacheName = "SantiEmpleoWebApp";
var filesToCache = [
    "/",
    "/index.html",
    "/js/message.js",
    "/js/connectionStatus.js",
    "/js/sw-link.js",
    "/css/custom.css",
    "/bootstrap/css/bootstrap.min.css",
    "/bootstrap/js/bootstrap.min.js",
    "/img/warehouse.png",
    "/img/fruit.png",
    "/img/selector.png",
    "/img/logo.png",
    "/img/logo-letters.png",
    "/css/Contact-Form-Clean.css",
    "/css/all.css",
    "/webfonts/fa-solid-900.eot",
    "/webfonts/fa-solid-900.svg",
    "/webfonts/fa-solid-900.ttf",
    "/webfonts/fa-solid-900.woff",
    "/webfonts/fa-solid-900.woff2",
    "/webfonts/fa-brands-400.eot",
    "/webfonts/fa-brands-400.svg",
    "/webfonts/fa-brands-400.ttf",
    "/webfonts/fa-brands-400.woff",
    "/webfonts/fa-brands-400.woff2",
    "/fruits.html",
    "/warehouse.html",
    "/selector.html",
    "/empleos.html",
    "/privacidad.html",
    "/contacto.html"

];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys()
            .then(keyList => Promise.all(keyList.map((key) => {
                if (key != cacheName) {
                    console.log("Service Worker Removing Old Cache", key)
                    return caches.delete(key)
                }
            })))
    )
})

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});