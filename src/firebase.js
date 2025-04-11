
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcOIANzPBmyJbZ0KTL9_ENpYE970OSr2g",
    authDomain: "spaceport-443cc.firebaseapp.com",
    projectId: "spaceport-443cc",
    storageBucket: "spaceport-443cc.firebasestorage.app",
    messagingSenderId: "432904250496",
    appId: "1:432904250496:web:109fa3ea4bd63128c23265",
    measurementId: "G-5D4JNCK3T3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);