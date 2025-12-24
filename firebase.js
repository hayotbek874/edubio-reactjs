import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHwbLvjZxGH05yGCkwNHENy38Q8Q5CsRw",
  authDomain: "edubio-5d272.firebaseapp.com",
  projectId: "edubio-5d272",
  storageBucket: "edubio-5d272.firebasestorage.app",
  messagingSenderId: "954827078952",
  appId: "1:954827078952:web:358095eedb0d3599a3241d",
  measurementId: "G-6JWLF6MQG7"
};

// Debug uchun: Konsolda tekshirish
console.log("Firebase ishga tushdi, Project ID:", firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
