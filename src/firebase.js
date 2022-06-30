// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyANFeok45D5NBSpw7eK2AddUbrPYHoc_P4",
  authDomain: "react-authentication-d8bf6.firebaseapp.com",
  projectId: "react-authentication-d8bf6",
  storageBucket: "react-authentication-d8bf6.appspot.com",
  messagingSenderId: "71724455169",
  appId: "1:71724455169:web:44f4912722022b9d6ff700",
  measurementId: "G-XK5VT7X4ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app 
