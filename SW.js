const CACHE = ‘splitpack-v1’;  
const ASSETS = [  
‘/’,  
‘/index.html’,  
‘/manifest.json’,  
‘/icon.png’,  
‘https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap’  
];  
  
self.addEventListener(‘install’, e => {  
e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));  
self.skipWaiting();  
});  
  
self.addEventListener(‘activate’, e => {  
e.waitUntil(caches.keys().then(keys =>  
Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))  
));  
self.clients.claim();  
});  
  
self.addEventListener(‘fetch’, e => {  
// Let Firebase calls go through network always  
if (e.request.url.includes(‘firestore.googleapis.com’) ||  
e.request.url.includes(‘firebase’) ||  
e.request.url.includes(‘gstatic.com/firebasejs’)) {  
return;  
}  
e.respondWith(  
caches.match(e.request).then(cached => cached || fetch(e.request))  
);  
});  
