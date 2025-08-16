
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyB8BD20xVQiA8sBGiM77OOkTwYZUly4tR0",
  authDomain: "void-7092e.firebaseapp.com",
  projectId: "void-7092e",
  storageBucket: "void-7092e.firebasestorage.app",
  messagingSenderId: "424598766131",
  appId: "1:424598766131:web:d980be50cf6b1777fbd946",
  measurementId: "G-B7ZXYECYV8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
