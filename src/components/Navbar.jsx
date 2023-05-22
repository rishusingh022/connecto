import React, { useContext} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import defaultImg from "../assets/default.jpg";
import fetchFirstName from '../utils/common/extractFirstName';

const Navbar = () => {
  const { currentUser } =  useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">👋 ‌Welcome</span>
      <div className="user">
        <img
          src={currentUser.photoURL ? currentUser.photoURL : defaultImg}
          alt=""
        />
        <span>{fetchFirstName(currentUser.displayName)}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
