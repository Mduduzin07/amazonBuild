// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvi1WQUK_w9jCCm6xl61oJBNF_VwxVIZk",
  authDomain: "tailwind-42a0b.firebaseapp.com",
  projectId: "tailwind-42a0b",
  storageBucket: "tailwind-42a0b.firebasestorage.app",
  messagingSenderId: "742220791639",
  appId: "1:742220791639:web:e09ccf74862e0d6c408812",
  measurementId: "G-YWW9FRLNZM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig