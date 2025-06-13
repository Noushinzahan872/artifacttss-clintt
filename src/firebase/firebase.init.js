// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1PezoAB3pgU223TIi1_p9E1VqHtj5Nf4",
  authDomain: "artifacts-app.firebaseapp.com",
  projectId: "artifacts-app",
  storageBucket: "artifacts-app.firebasestorage.app",
  messagingSenderId: "1048580501787",
  appId: "1:1048580501787:web:d9c054f4b11b3f021ea3be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;