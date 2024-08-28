// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVFdTQq8N7X4WIgDAp8ONAlrJF7T-mSYo",
  authDomain: "online-job-portal-8483a.firebaseapp.com",
  projectId: "online-job-portal-8483a",
  storageBucket: "online-job-portal-8483a.appspot.com",
  messagingSenderId: "524527975911",
  appId: "1:524527975911:web:52904d2e292a7f8ebc1142",
  measurementId: "G-P5319D5QXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};