// Jango Cards offline: keeps the page, the sheet files and the fonts, so the site opens with no connection once it has been
// opened with one. The network comes first, so a connected visit always gets the newest page and sheets; the kept copy
// answers when the network is gone, or too slow (a weak signal), and a copy is refreshed every time the network answers.
const CACHE = "jango-cards-v1";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
const SLOW_MS = 6000; // past this, a kept copy is used instead of waiting on the network

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// The page lists what it read on its first visit (sheet files, the GitHub file list, the font stylesheet), before this
// worker was looking after it
self.addEventListener("message", e => {
  const urls = (e.data && Array.isArray(e.data.keep)) ? e.data.keep : [];
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(urls.map(u => fetch(u, { cache: "no-cache" }).then(r => { if (r.ok) return c.put(u, r); }).catch(() => {})))));
});

const keep = (c, key, r) => { if (r && (r.ok || r.type === "opaque")) c.put(key, r.clone()).catch(() => {}); return r; };
async function networkFirst(req, fallbacks = []) {
  const c = await caches.open(CACHE), net = fetch(req).then(r => keep(c, req, r));
  net.catch(() => {}); // a late failure after a kept copy answered is fine
  const kept = async () => { for (const k of [req, ...fallbacks]) { const hit = await c.match(k, { ignoreSearch: true }); if (hit) return hit; } return null; };
  try { return await Promise.race([net, new Promise((_, no) => setTimeout(() => no(new Error("slow")), SLOW_MS))]); }
  catch (err) { return (await kept()) || net; } // nothing kept: wait for the network after all
}
async function cacheFirst(req) {
  const c = await caches.open(CACHE), hit = await c.match(req);
  const net = fetch(req).then(r => keep(c, req, r)).catch(() => hit);
  return hit || net;
}
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (req.mode === "navigate") e.respondWith(networkFirst(req, ["./", "index.html"]));
  else if (url.origin === location.origin) e.respondWith(networkFirst(req));
  else if (url.hostname === "api.github.com" && /\/contents\/sheets\/?$/.test(url.pathname)) e.respondWith(networkFirst(req));
  else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") e.respondWith(cacheFirst(req));
});
