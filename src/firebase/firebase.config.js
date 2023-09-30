// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpeu49dhx2RsVDTuAl1udCNXe8QgYfZSg",
  authDomain: "user-login-register-with.firebaseapp.com",
  projectId: "user-login-register-with",
  storageBucket: "user-login-register-with.appspot.com",
  messagingSenderId: "1071562407746",
  appId: "1:1071562407746:web:12304d428e5dff21bb92db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get auth 
const auth = getAuth(app)
export default auth;
