// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLk-XrH8W9TbLIYO3aI-D6pHWTbQUZOzc",
  authDomain: "mostofakamal-27235.firebaseapp.com",
  projectId: "mostofakamal-27235",
  storageBucket: "mostofakamal-27235.appspot.com",
  messagingSenderId: "105036064651",
  appId: "1:105036064651:web:694963b6e24cf23a18318e",
  measurementId: "G-TDK33417VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);