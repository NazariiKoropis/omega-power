// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAFn2gz6ZG00eCD8CduOf51mbokSZudBQ",
  authDomain: "omega-power-eb66b.firebaseapp.com",
  databaseURL: "https://omega-power-eb66b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "omega-power-eb66b",
  storageBucket: "omega-power-eb66b.firebasestorage.app",
  messagingSenderId: "451392161381",
  appId: "1:451392161381:web:d51014d66afafb973b288c",
  measurementId: "G-YZBLZMDLKE"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Експортуємо сервіси, які будемо юзати
export const db = getDatabase(app);
export const auth = getAuth(app);