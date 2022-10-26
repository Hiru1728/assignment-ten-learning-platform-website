// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqwb8697sQEMrpIfuQzeR9WO9Yz8KBihk",
    authDomain: "learning-courses-be33b.firebaseapp.com",
    projectId: "learning-courses-be33b",
    storageBucket: "learning-courses-be33b.appspot.com",
    messagingSenderId: "991687328941",
    appId: "1:991687328941:web:5608f4c063a9fecdb9f224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;