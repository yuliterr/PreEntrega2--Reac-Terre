
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArcsFoPo94n5Sal4yXXpGM2SXNa4uQAG8",
  authDomain: "productos-picuditos.firebaseapp.com",
  projectId: "productos-picuditos",
  storageBucket: "productos-picuditos.firebasestorage.app",
  messagingSenderId: "11392316262",
  appId: "1:11392316262:web:7ae9b5bc9b5cfba2048ea7"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore ();

export default db;
