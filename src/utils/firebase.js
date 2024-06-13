// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRPDj-8gb4D8w03jsF20bgmBGQcJmJB8Q",
  authDomain: "netflixgbt-4de90.firebaseapp.com",
  projectId: "netflixgbt-4de90",
  storageBucket: "netflixgbt-4de90.appspot.com",
  messagingSenderId: "340563990464",
  appId: "1:340563990464:web:985c94a3a0d7f6316a1a25",
  measurementId: "G-DD7BZVF73H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();