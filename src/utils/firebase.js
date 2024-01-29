// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDivr0P59grr0oVwc7vXVTRTHcX9QvzGks",
  authDomain: "netflixgpt-24174.firebaseapp.com",
  projectId: "netflixgpt-24174",
  storageBucket: "netflixgpt-24174.appspot.com",
  messagingSenderId: "600198543029",
  appId: "1:600198543029:web:6b9503fa1909e146e370fc",
  measurementId: "G-KTD2WVKWSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();