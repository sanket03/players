// TODO: Replace Xs.
importScripts('static/js/workbox-sw.prod.js');

// Note: Ignore the error that Glitch raises about WorkboxSW being undefined.
const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});

workbox.precache([]);