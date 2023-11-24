// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV741LXvIs4iAXbx4gKbE0wzSOVYhtiAc",
  authDomain: "ecommerce-dash-175e5.firebaseapp.com",
  projectId: "ecommerce-dash-175e5",
  storageBucket: "ecommerce-dash-175e5.appspot.com",
  messagingSenderId: "772470015228",
  appId: "1:772470015228:web:54e127f2644e6eff934379",
  measurementId: "G-QY5FXXF2TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {Auth, db, analytics}