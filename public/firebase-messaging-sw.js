importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyCNJXboWGZ67afDMvstjiCSw3Y6M5_Nbbw",
    authDomain: "timer-app-d1f9c.firebaseapp.com",
    databaseURL: "https://timer-app-d1f9c.firebaseio.com",
    projectId: "timer-app-d1f9c",
    storageBucket: "timer-app-d1f9c.appspot.com",
    messagingSenderId: "528014525994",
    appId: "1:528014525994:web:fc1f50da224ab515b22553"
  };
firebase.initializeApp(firebaseConfig)
firebase.messaging();