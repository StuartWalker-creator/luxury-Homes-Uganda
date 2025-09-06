
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD2LPi2yO-7p0eXKKiN2Yk88KbPgd5bB4I",
    authDomain: "luxuryhomesug-cb8a4.firebaseapp.com",
    projectId: "luxuryhomesug-cb8a4",
    storageBucket: "luxuryhomesug-cb8a4.firebasestorage.app",
    messagingSenderId: "602825431747",
    appId: "1:602825431747:web:a2df5ff07b2cb243756076",
    measurementId: "G-1WGL2NCVD7"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

alert("we are done")