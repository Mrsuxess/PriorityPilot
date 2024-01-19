// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHswHoJsLynukgqYjMj9MvrR0EpXap9-w",
  authDomain: "prioritypilot-499ad.firebaseapp.com",
  projectId: "prioritypilot-499ad",
  storageBucket: "prioritypilot-499ad.appspot.com",
  messagingSenderId: "1088855674415",
  appId: "1:1088855674415:web:0d3e98ae872cf4316280da",
  measurementId: "G-3X8FWZMD5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
