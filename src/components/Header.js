import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUsers, removeUser } from "../utils/userslice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch= useDispatch()

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL}= user;
        dispatch(addUsers({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[]);


  return (
    <div className="absolute w-[100%] flex h-28 justify-between bg-gradient-to-b from-black z-30">
      <div className=" px-8 py-2 bg-gradient-to-b from-black ">
        <img
          className="w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
          srcset=""
        />
      </div>
      {user && (
        <div className="flex">
          <img
            className="w-16 h-16 m-4"
            src={user?.photoURL}
            alt=""
            srcset=""
          />
          <button
            onClick={HandleSignOut}
            className="bg-white h-8 mt-6 mr-2 p-2 "
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
