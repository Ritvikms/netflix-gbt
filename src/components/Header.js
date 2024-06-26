import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
 
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            
          }).catch((error) => {
            navigate("/error");
        });
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
             navigate("/browse");
            } else {
              dispatch(removeUser());
             navigate("/");
            }
          });

          //unsubscribe when component unmounts
          return ()=>unsubscribe();
    },[]);

    const handleGptSearchClick=()=>{
        //Toggle GPT Search Button 
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange=(e)=>{
         dispatch(changeLanguage(e.target.value));
    }

    return(
        <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b  from-black z-10">
            <img className="w-44 " src={LOGO}
            alt="Logo"
            />
       {user && <div className="flex p-2 m-2">
        {showGptSearch && <select className="p-2 bg-gray-900 text-white m-2" onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}> {lang.name}</option>)}
            
           
        </select>}
        <button className="py-2 px-5 m-2 mx-4 bg-blue-900 text-white rounded-lg "
        onClick={handleGptSearchClick}>
           {showGptSearch?"HomePage": "GPT Search 🔎"} </button>
            <img className="w-12 h-12 " alt="usericon" src="https://occ-0-77-3679.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            />
            <button onClick={handleSignOut} className="font-bold text-white px-2">(Sign Out)</button>
        </div>}

        </div>
    )
}

export default Header;