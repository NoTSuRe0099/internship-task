// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgnKXC0DrS4uHATj41LOh73a6EhDhIOHE",
    authDomain: "fir-1fc6d.firebaseapp.com",
    projectId: "fir-1fc6d",
    storageBucket: "fir-1fc6d.appspot.com",
    messagingSenderId: "329258441077",
    appId: "1:329258441077:web:a0635fc6b150066b445b3c",
    measurementId: "G-ZCE5605W9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
