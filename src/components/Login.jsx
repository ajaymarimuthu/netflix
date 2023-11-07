import Header from "./Header";
import { useState, useRef } from "react";

import { checkValidData } from "../utils/validateData";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
 

 

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [erroMessage, setErroMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const navigate=useNavigate()
 

  
 
  

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validating the form data
    const res = checkValidData(email.current.value, password.current.value);
    console.log("res",res);
    setErroMessage(res || "");

    if (res) return;

    //if the if block dont execute , then below code will work for sign/signup
    //create a new user
    //sign in/sign up

    if (!isSignInForm) {
      //chekcing this is  signup form

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;


          //api to update user profile after creating succeful user
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/102468084?v=4"
          }).then(() => {
            // Profile updated!

            navigate("/browse");
          
          }).catch((error) => {
            // An error occurred

          setErroMessage(error)
            
            // ...
          });

          
 
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log("erroMessage",errorMessage);
          console.log("errorCode",errorCode);

          setErroMessage(errorCode + "-" + errorMessage)

          
          // ..
        });
    } else {
      //this is s sign in form


      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log(user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      
        console.log("erroMessage",errorMessage);
        console.log("errorCode",errorCode);
      });



    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen "
      style={{
        backgroundImage:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
      }}
    >
      <Header name="asd" />

      <div className="absolute inset-0 flex justify-center items-center   ">
        <form
          className="w-full  max-w-md  flex flex-col p-14 bg-black bg-opacity-80 "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-white text-3xl font-semibold pl-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              className="p-4 py-3 m-2 rounded-lg focus:outline-none text-white bg-gray-600  "
              type="text"
              placeholder="FullName"
              ref={name}
            />
          )}

          <input
            className="p-4 py-3 m-2 rounded-lg focus:outline-none text-white bg-gray-600  "
            type="text"
            placeholder="Email Address"
            ref={email}
          />

          <input
            className="p-4 py-3 m-2 rounded-lg  focus:outline-none text-white  bg-gray-600 "
            type="password"
            placeholder="Password"
            ref={password}
          />
          <p className="text-red-600 text-xs pl-3">{erroMessage}</p>

          <button
            className=" p-4 py-3 mx-2 mt-12 text-white bg-red-700 rounded-lg  "
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}{" "}
          </button>
          <p
            className="text-white  p-2 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registered, SignIn now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
