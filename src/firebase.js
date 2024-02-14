import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDYwNB0E-INfWIR5AEbw9tnZ4oJNQtErE",
  authDomain: "chat-84120.firebaseapp.com",
  projectId: "chat-84120",
  storageBucket: "chat-84120.appspot.com",
  messagingSenderId: "961720223416",
  appId: "1:961720223416:web:4955f51279d7277a70164d",
  measurementId: "G-HY5QPCTGH7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();