// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRtpYla1P2Wo4ZfIKGma-tNDxPmQ53Dl4",
  authDomain: "creative-space-bf8c6.firebaseapp.com",
  projectId: "creative-space-bf8c6",
  storageBucket: "creative-space-bf8c6.appspot.com",
  messagingSenderId: "418276824323",
  appId: "1:418276824323:web:ecb6ecccaa9ff75a31c536",
  measurementId: "G-97FT0PT8FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fbAuth = getAuth(app);
export const fbFirestore = getFirestore(app);
export const fbStorage = getStorage(app);
