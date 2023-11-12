// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD4iDa4hdKZ04qWstaKA0uAti-F0jOsmQ",
  authDomain: "easy-fashion-b0307.firebaseapp.com",
  projectId: "easy-fashion-b0307",
  storageBucket: "easy-fashion-b0307.appspot.com",
  messagingSenderId: "560574496413",
  appId: "1:560574496413:web:b08b4094a5ca898a6f9e74",
  measurementId: "G-T0RXJGL15T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;