import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../img/googleLogo.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAqs68jHQCvQs9TJj93InLrDjXvcOKusQw",
  authDomain: "chat-e488a.firebaseapp.com",
  projectId: "chat-e488a",
  storageBucket: "chat-e488a.appspot.com",
  messagingSenderId: "572982618483",
  appId: "1:572982618483:web:a8fda6d94bdb576ebdfd06",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function SignInWithGoogle() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    const user = auth.currentUser;
    //create user on firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });

    //create empty user chats on firestore
    await setDoc(doc(db, "userChats", user.uid), {});
    navigate("/");
  };
  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        <img src={GoogleLogo} />
        Sign in with Google
      </button>
    </>
  );
}

export default SignInWithGoogle;
