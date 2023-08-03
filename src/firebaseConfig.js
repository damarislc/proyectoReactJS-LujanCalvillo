// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//import { getFirestore } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

// ONSUBMIT DEL FORMULARIO DE LOGIN
export const login = async ({ email, password }) => {
  let res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};
// ONSUBMIT DEL FORMULARIO DE REGISTRO
export const register = async ({ email, password }) => {
  let res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};

let proveedorGoogle = new GoogleAuthProvider();
export const loginGoogle = async () => {
  let res = await signInWithPopup(auth, proveedorGoogle);
  return res;
};
