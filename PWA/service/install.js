/** cache key */
const cacheName = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(async () => {
    const cache = await caches.open(cacheName);

    console.log(cache);
  });
});
