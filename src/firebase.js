import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqs68jHQCvQs9TJj93InLrDjXvcOKusQw",
  authDomain: "chat-e488a.firebaseapp.com",
  projectId: "chat-e488a",
  storageBucket: "chat-e488a.appspot.com",
  messagingSenderId: "572982618483",
  appId: "1:572982618483:web:a8fda6d94bdb576ebdfd06",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
