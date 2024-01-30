import React, { useState, useRef } from "react";
import Header from "./Header";
import { FormValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userslice";
const Login = () => {
  const dispatch= useDispatch();
  const email = useRef(null);
  const navigate = useNavigate();
  const password = useRef(null);
  const name = useRef();
  const [errMessage, setErrMessage] = useState(null);
  const handleButton = () => {

    const message = FormValidation(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;
    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/116081426?v=4",
          })
            .then(() => {
              const {uid, email, displayName, photoURL}= auth;
          dispatch(addUsers({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const [isSignForm, setIsSignForm] = useState(true);
  const toggleSignForm = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute opacity-85"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          srcset=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action="/browse"
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto text-white right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-900 text-4xl py-4">
          {isSignForm ? "Sign in" : "Sign up"}
        </h1>

        {!isSignForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-500">{errMessage}</p>
        <button
          className="bg-red-700 p-3 my-6 w-full rounded-lg"
          onClick={handleButton}
        >
          {isSignForm ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignForm}>
          {" "}
          {isSignForm
            ? "New to Netflix? Sign up now"
            : "Already resiter User? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
