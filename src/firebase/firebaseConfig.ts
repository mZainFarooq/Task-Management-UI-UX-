// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoeEJ4Uc8_S6t6FUfTW-S4JWCkZKwuPpw",
  authDomain: "task-management-7d5b7.firebaseapp.com",
  projectId: "task-management-7d5b7",
  storageBucket: "task-management-7d5b7.firebasestorage.app",
  messagingSenderId: "372391596511",
  appId: "1:372391596511:web:874e022dc4915432f1f46a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
