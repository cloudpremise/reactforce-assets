self.addEventListener('activate', () => {
  // self.clients.matchAll({ type: 'window' }).then(windowClients => {
  //   for (let windowClient of windowClients) {
  //     // Force open pages to refresh, so that they have a chance to load the
  //     // fresh navigation response from the local dev server.
  //     windowClient.navigate(windowClient.url);
  //   }
  // });
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'SKIP_WAITING' || event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Listen for request events
self.addEventListener('fetch', function (event) {

    // Get the request
    let request = event.request;
    console.log(event);
    console.log(request);
  
    // Bug fix
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
  
});