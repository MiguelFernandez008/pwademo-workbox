importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/photos'),
    workbox.strategies.networkFirst()
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.css",
    "revision": "a8f3c93d8f6fdb29d6adf9992f0795fd"
  },
  {
    "url": "index.html",
    "revision": "60c28d0c7ca9f1536c73fdf61606a1ae"
  },
  {
    "url": "js/app.js",
    "revision": "545daa8518feaa54d84ca970a5fdc050"
  }
]);