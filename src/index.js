// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics, logEvent } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDfHd_PwZWJIBiFG9rRvvvyB2npWJ6rquE",

  authDomain: "ideology-f28a8.firebaseapp.com",

  projectId: "ideology-f28a8",

  storageBucket: "ideology-f28a8.appspot.com",

  messagingSenderId: "222162333913",

  appId: "1:222162333913:web:99e8575c90873c9b7a0ec8",

  measurementId: "G-4DY5WPKB4H"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

