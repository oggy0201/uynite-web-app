importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


const firebaseConfig = {

  apiKey: "AIzaSyDbynJX-7_WEXTV27eH12PMoHuNoquzAtk",

  authDomain: "uynite-58644.firebaseapp.com",

  projectId: "uynite-58644",

  storageBucket: "uynite-58644.appspot.com",

  messagingSenderId: "653379364316",

  appId: "1:653379364316:web:a28c0091f9eec7dea91b19",

  measurementId: "G-KYT183BCCB"

};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message "
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open("SH-V1");
//   await cache.addAll(resources);
// };
// /* eslint-disable-next-line no-restricted-globals */
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     addResourcesToCache([
//       "/",
//       "/index.html",
//       "/static/js/bundle.js"
//     ])
//   );
// });
