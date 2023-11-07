// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_dovKlIUlTnQ8z9cDdgy7sgKZYtj7HS4",
  authDomain: "netflix-17893.firebaseapp.com",
  projectId: "netflix-17893",
  storageBucket: "netflix-17893.appspot.com",
  messagingSenderId: "236829131227",
  appId: "1:236829131227:web:cd40f9f2a12e841bf0a7fe",
  measurementId: "G-9QZB7P4C4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth=getAuth();