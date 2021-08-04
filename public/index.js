// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/service-worker.js").then(
//       (registration) => {
//         console.log(
//           `ServiceWorker registration successful with scope: ${registration.scope}`
//         );
//       },
//       (error) => {
//         console.log(`ServiceWorker registration failed: ${error}`);
//       }
//     );
//   });
// }

(async () => {
  try {
    if ("serviceWorker" in navigator) {
      const register = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      console.log(
        `ServiceWorker registration successful with scope: ${register.scope}`
      );
    }
  } catch (err) {
    console.log(`ServiceWorker registration failed: ${error}`);
  }
})();
