// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDL0vOBnmJUc141wN7B7DbD8NB_EqWFO0Q",
  authDomain: "velasquez-sandbox.firebaseapp.com",
  projectId: "velasquez-sandbox",
  storageBucket: "velasquez-sandbox.firebasestorage.app",
  messagingSenderId: "660536631717",
  appId: "1:660536631717:web:e690091fa6b58a7144884c",
  measurementId: "G-0ZN72R20MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;