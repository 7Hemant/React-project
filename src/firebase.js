import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-firebase-dc2a9.firebaseapp.com",
  projectId: "react-firebase-dc2a9",
  storageBucket: "react-firebase-dc2a9.appspot.com",
  messagingSenderId: "941253271768",
  appId: "1:941253271768:web:f604fb9d29e0ebf27eb7ad",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
