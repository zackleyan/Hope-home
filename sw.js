
self.addEventListener('install', function(e) {
  console.log('Hope Service Worker Installed');
});
self.addEventListener('fetch', function(e) {
  console.log('Fetch intercepted for:', e.request.url);
});
