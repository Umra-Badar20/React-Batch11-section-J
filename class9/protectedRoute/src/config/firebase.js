
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged   } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRH4zS_zHcM-uOTnAvY6G4xWUrg4MVdPY",
  authDomain: "batch-11-smit-bdbb0.firebaseapp.com",
  projectId: "batch-11-smit-bdbb0",
  storageBucket: "batch-11-smit-bdbb0.firebasestorage.app",
  messagingSenderId: "750497389449",
  appId: "1:750497389449:web:3bb231530fafc0c61a5f58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth,getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged
}