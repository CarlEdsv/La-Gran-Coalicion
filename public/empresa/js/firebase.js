// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCytyHGxXG5P-H18Yb9kEIZTBeNwIpyAUg",
  authDomain: "jobs-b7d7c.firebaseapp.com",
  projectId: "jobs-b7d7c",
  storageBucket: "jobs-b7d7c.appspot.com",
  messagingSenderId: "800624290227",
  appId: "1:800624290227:web:b3038a722182c15cae83c6",
  measurementId: "G-3VNNR56W20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);