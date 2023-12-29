/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf4kMvENB5VvD1l5DaJ6gVtesrZewhr64",
  authDomain: "deal-stamps.firebaseapp.com",
  projectId: "deal-stamps",
  storageBucket: "deal-stamps.appspot.com",
  messagingSenderId: "928243830570",
  appId: "1:928243830570:web:40630495e7d7549fc19853",
  measurementId: "G-MKFW91R1NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const fs = getFirestore(app); // Corrected line

export { auth, db, Timestamp, provider, analytics, fs };