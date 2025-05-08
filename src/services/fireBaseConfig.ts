import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZ7vc7Omnvr597fXGKZq0I2AtX2oFikOc",
  authDomain: "saudenobairro-c2f40.firebaseapp.com",
  projectId: "saudenobairro-c2f40",
  storageBucket: "saudenobairro-c2f40.firebasestorage.app",
  messagingSenderId: "1091679366649",
  appId: "1:1091679366649:web:d7ce9de9f8f40be674a128"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };






