
// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
//import { getStorage} from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnjoFHe41aVFXrjbxOMhjnEGsMTGSCcwI",
    authDomain: "cooplaner.firebaseapp.com",
    projectId: "cooplaner",
    storageBucket: "cooplaner.appspot.com",
    messagingSenderId: "1086055360406",
    appId: "1:1086055360406:web:ef8e1fdeae487bd5dadfb7",
    measurementId: "G-ZVBS39WF6E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app)