// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRLib_Fb4JybxzY0J3-rzYW3yJO-UwQ2M",
    authDomain: "discord-clone-19e45.firebaseapp.com",
    projectId: "discord-clone-19e45",
    storageBucket: "discord-clone-19e45.appspot.com",
    messagingSenderId: "1074303638208",
    appId: "1:1074303638208:web:aaa98be332de663fbaeb25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };