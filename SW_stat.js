const cacheName = "s";

const cacheAssets = [
  'text_picture_website.html',
  'site.css',
  'site.js',
  'pic_trulli.jpg',
  'ac3b2a_1540762.jpg',
  'cook.jpg',
  'love.jpg',
  'cry.jpeg',
  'download.jpeg',
  'drunk.jpg',
  'fact.jpg',
  'fail.jpeg',
  'fast.jpg',
  'fruit.jpg',
  'i.jpg',
  'nicolas_cage_troll_face_by_notanamewaster_d6rx1w0.jpg',
  'now.png',
  'swamp.jpg',
  'trumpswears.jpg',
  'welcome.jpg',
  'wow.jpeg'
];

//call install
self.addEventListener('install',(e) =>
{
    console.log("service worker: installed");
    e.waitUntil(
      caches
        .open(cacheName)
        .then(cache =>
        {
          console.log("service worker: Caching Files");
          cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});

//call activate
self.addEventListener('activate',(e) =>
{
    console.log("service worker: activated");
    //remove unwanted cache
    e.waitUntil(
      caches.keys().then(cacheName =>
      {
        return Promise.all(
          cacheName.map(cache =>
          {
            if (cache != cacheName)
            {
              console.log("service worker: clearing old cache");
              return caches.delete(cache);
            }
          })
        )
      })
    );
});

//call fetch
self.addEventListener('fetch', e =>
{
  console.log("service worker: fetching");
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
