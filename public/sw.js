/*
  sw.js — KILL SWITCH.

  We used to ship a service worker (the offline "turn off your wifi" gate). That
  feature is gone, but any browser that visited the old site still has that
  worker installed and keeps serving the OLD cached pages (with the overlay)
  forever — even after the page's registration code was removed.

  Simply deleting this file doesn't help: a 404 leaves the old worker in place.
  Instead we leave THIS minimal worker here. The browser automatically re-checks
  /sw.js on navigation; when it sees this new version it installs it, and the
  code below clears the old caches, unregisters the worker, and reloads open
  tabs — so visitors are returned to the normal, un-gated site automatically.

  Once you're confident no browser is still stuck on the old worker, this file
  can be deleted.
*/

// Take over as soon as we're installed, instead of waiting for tabs to close.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // 1. Delete every cache the old worker created.
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      // 2. Unregister this worker so nothing intercepts requests anymore.
      await self.registration.unregister();

      // 3. Reload any open tabs so they re-fetch fresh pages from the network.
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) client.navigate(client.url);
    })()
  );
});
