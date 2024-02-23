const isServiceWorkerSupported = "serviceWorker" in navigator;
if (!isServiceWorkerSupported) alert("Service Worker is not supported");

const sw = navigator.serviceWorker;
const controller = sw.controller;

async function main() {
  await navigator.serviceWorker.ready;

  navigator.serviceWorker.register("/PWA/service/install.js");
  navigator.serviceWorker.register("/PWA/service/notification.js");
}

main();
