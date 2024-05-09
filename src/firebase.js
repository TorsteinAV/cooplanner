import firebase from 'firebase/app';
import 'firebase/firestore'; // If you're using Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDnjoFHe41aVFXrjbxOMhjnEGsMTGSCcwI",
  authDomain: "cooplaner.firebaseapp.com",
  projectId: "cooplaner",
  storageBucket: "cooplaner.appspot.com",
  messagingSenderId: "1086055360406",
  appId: "1:1086055360406:web:ef8e1fdeae487bd5dadfb7"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebaseApp.firestore();

export default { db };