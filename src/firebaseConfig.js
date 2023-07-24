// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getFirestore } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqHm8LJMP-OK6JjowJclzXbQ3JnPMDMVM",
  authDomain: "libreria-damalu.firebaseapp.com",
  projectId: "libreria-damalu",
  storageBucket: "libreria-damalu.appspot.com",
  messagingSenderId: "765706673916",
  appId: "1:765706673916:web:2612de5760bfcf369e8179",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
