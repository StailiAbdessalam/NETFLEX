// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9yfAr3g0o3PK3_r2oyAGns1MZIJYabiE",
  authDomain: "netflex-d9cbd.firebaseapp.com",
  projectId: "netflex-d9cbd",
  storageBucket: "netflex-d9cbd.appspot.com",
  messagingSenderId: "783344291907",
  appId: "1:783344291907:web:14084dc2ee8326fb7284f6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
