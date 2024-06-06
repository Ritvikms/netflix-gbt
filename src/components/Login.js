import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const[isSignInForm,setisSignInForm]=useState(true);
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
        <form className="absolute my-36 mx-auto left-0 right-0 bg-opacity-80 bg-black rounded-xl p-12 w-3/12  text-white">
            <h1 className="font-bold text-3xl py-4 ">{ isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="name" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"></input>}
            <input type="text" placeholder="Email or phone number " className="p-4 my-4 w-full bg-gray-700"></input>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"></input>
            {!isSignInForm && <input type="password" placeholder="Confirm Password" className="p-4 my-4 w-full bg-gray-700"></input>}
            <button className="p-4 my-6 bg-red-700 w-full">{ isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{ isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
    );
};

export default Login;