// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNXO0b2PSyKxecZOia41H82spspuz2EKk",
  authDomain: "alerces-ecommerce-db.firebaseapp.com",
  projectId: "alerces-ecommerce-db",
  storageBucket: "alerces-ecommerce-db.appspot.com",
  messagingSenderId: "946653732755",
  appId: "1:946653732755:web:64b5c810c682827bf81266"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const database = getFirestore(fb);

export {database};
