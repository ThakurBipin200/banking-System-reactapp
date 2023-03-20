// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgAuh9jTQCFJlvPW0wzUAgxCTGhwMSRMI",
  authDomain: "bankingsystem-d5253.firebaseapp.com",
  projectId: "bankingsystem-d5253",
  storageBucket: "bankingsystem-d5253.appspot.com",
  messagingSenderId: "115011314902",
  appId: "1:115011314902:web:0ab2b4da46c79404f49577",
  measurementId: "G-C6JPLXSLKV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
