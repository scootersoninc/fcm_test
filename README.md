# FCM Test App

This app tests FCM messaging service on browser

## Setting Up

Install npm serve with,
```shell
    npm install --global serve
```
Then edit ```src/index.js``` and ```src/firebase-messaging-sw.js``` and add the right values for ```firebaseConfig```.

You can find the values from the Firebase console.

**```apiKey```**: In the Firebase console, go to your project settings. Under the "General" tab, you'll find an API key. Copy that key and replace 'YOUR_API_KEY' with the actual API key.

**```authDomain```**: 
In the Firebase console, navigate to the "Authentication" section. Under the "Sign-in method" tab, you'll find the "Authorized domains" section. Add your domain to the authorized domains list or use the default domain provided by Firebase. Replace 'YOUR_AUTH_DOMAIN' with the appropriate domain.

**```projectId```**: 
In the Firebase console, your project ID is displayed at the top of the project overview page. Copy the project ID and replace 'YOUR_PROJECT_ID' with it.

**```storageBucket```**: 
In the Firebase console, navigate to the "Storage" section. The storage bucket URL will be displayed on the page. Replace 'YOUR_STORAGE_BUCKET' with the appropriate storage bucket URL.

**```messagingSenderId```**: 
In the Firebase console, go to your project settings. Under the "Cloud Messaging" tab, you'll find the "Sender ID" listed. Copy the Sender ID and replace 'YOUR_SENDER_ID' with it.

**```appId```**: 
In the Firebase console, your Firebase app's ID is displayed at the top of the project overview page. Copy the app ID and replace 'YOUR_APP_ID' with it.

## Running the FCM Test App
Use the following command to run:
```shell
    sh run.sh
```
Then access the app through http://localhost:3000

After a few seconds, App will display the FCM Device Token. Use this token to register in http://sandbox.scooterson.com:8080/push/register API.

When you send messages using http://sandbox.scooterson.com:8080/push/pub , then the received messages will be displayed in the browser.

But if the message is received while the browser is not in focus, the you have to open the JS console logs of the browser to see the received FCM message. 