window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/OneSignalSDKWorker.js")
      .then(function(registration) {
        console.log("Service Worker Registered", registration);
      })
      .catch(function(err) {
        console.log("Service worker failed to register", err);
      });
  }
};
