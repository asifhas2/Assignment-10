// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ZXKBQtWjzfoC37H4JXeuvyWs0eSTRC0",
  authDomain: "assignment-10-9c9a9.firebaseapp.com",
  projectId: "assignment-10-9c9a9",
  storageBucket: "assignment-10-9c9a9.firebasestorage.app",
  messagingSenderId: "981970340010",
  appId: "1:981970340010:web:5d3eaff0ae245a4473e8d3"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
