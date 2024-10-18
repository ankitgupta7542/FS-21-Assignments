// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwDPZG5_g9PacZG9FijChODc5goHm_fdw",
  authDomain: "myfirebase-72045.firebaseapp.com",
  projectId: "myfirebase-72045",
  storageBucket: "myfirebase-72045.appspot.com",
  messagingSenderId: "229653408053",
  appId: "1:229653408053:web:5e3b3dffe9a74b9ee1847c",
  measurementId: "G-XYV92D05ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);