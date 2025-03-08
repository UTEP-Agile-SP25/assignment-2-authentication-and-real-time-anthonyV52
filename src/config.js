// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByPO5WNm4acKUOPa8ywMi9FEUzFdY-GZA",
  authDomain: "anthony-sandbox-9b6f9.firebaseapp.com",
  projectId: "anthony-sandbox-9b6f9",
  storageBucket: "anthony-sandbox-9b6f9.firebasestorage.app",
  messagingSenderId: "199081558219",
  appId: "1:199081558219:web:3c2b913d05f84d739e5b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;