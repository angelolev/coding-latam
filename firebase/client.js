// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwkQvr28jbGKVNgIkegq3qvSIk5lny620",
  authDomain: "coding-latam.firebaseapp.com",
  databaseURL: "https://coding-latam.firebaseio.com",
  projectId: "coding-latam",
  storageBucket: "coding-latam.appspot.com",
  messagingSenderId: "422443921553",
  appId: "1:422443921553:web:494d758dfbc7bf822a8f30",
  measurementId: "G-BY52FJ4TCK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);
