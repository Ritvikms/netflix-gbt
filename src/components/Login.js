import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {

    const[isSignInForm,setisSignInForm]=useState(true);
    const[errorMessage,seterrorMessage]=useState(null);

    const dispatch=useDispatch();
    
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    

    const handleButtonClick = () => {
        //validate the form data
      const message=CheckValidData(email.current.value,password.current.value)
      seterrorMessage(message);

      if(message) return;

      if(!isSignInForm){
        //Sign up Logic
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
         .then((userCredential) => {
         // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL:{USER_AVATAR}
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
           
        }).catch((error) => {
            seterrorMessage(error.message);
          });
        
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode+"-"+errorMessage);
         });

      }
      else{
        //Sign In Logic
       
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
     .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage);
  });

      }
    }
    const toggleSignInForm= () => {
        setisSignInForm(!isSignInForm);
    };
    return (
    <div >
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/4244dac6-92b3-4f0c-bca5-0973a354987d/US-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="backgroundImage"
        />
        </div>
        <form
        onSubmit={(e)=>e.preventDefault()} 
        className="absolute my-36 mx-auto left-0 right-0 bg-opacity-80 bg-black rounded-xl p-12 w-3/12  text-white">
            <h1 className="font-bold text-3xl py-4 ">
                { isSignInForm? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && <input 
                                type="name"
                                 placeholder="Full Name" 
                                 className="p-4 my-4 w-full bg-gray-700"></input>}
            <input 
            ref={email}
            type="text" 
            placeholder="Email or phone number " 
            className="p-4 my-4 w-full bg-gray-700"></input>

            <input 
            ref={password}
            type="password" 
            placeholder="Password" 
            className="p-4 my-4 w-full bg-gray-700"></input>

            {!isSignInForm && <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                className="p-4 my-4 w-full bg-gray-700"></input>}
            
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

            <button 
            className="p-4 my-6 bg-red-700 w-full" 
            onClick={handleButtonClick}>
            { isSignInForm? "Sign In" : "Sign Up"}</button>

            <p 
            className="py-4 cursor-pointer" 
            onClick={toggleSignInForm}>
                { isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
    );
};

export default Login;