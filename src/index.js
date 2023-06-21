import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-messaging.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

function _createMsg(payload){
  var target = document.querySelector("body");

      var p = document.createElement('p');
      p.innerHTML = JSON.stringify(payload);

      var div = document.createElement('div');
      div.appendChild(p);

      var fragment = document.createDocumentFragment();
      fragment.appendChild(div);

      target.appendChild(fragment);
}

const messaging = firebase.messaging();

    messaging.onMessage((payload) => {
      console.log('Received message:', payload);
      _createMsg(payload);
    });

    messaging.getToken().then((currentToken) => {
      if (currentToken) {
        _createMsg('FCM Device Token: ' + currentToken);
        // Send the token to your server for further processing
      } else {
        _createMsg('No registration token available.');
      }
    }).catch((err) => {
      _createMsg('An error occurred while retrieving the token:', err);
});
