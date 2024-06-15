import { useSelector } from "react-redux";
import lang from "../utils/languageConstants"
const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang);

    return <div className="pt-[20%] flex justify-center">
        <form className="  bg-black w-1/2 grid-cols-12 ">
            <input type="text"
             className="p-4 m-4 w-9/12 " 
             placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className=" p-4 m-4 bg-red-700 w-1/6 text-white rounded-lg">{lang[langKey].search}</button>
        </form>
        </div>
}
export default GptSearchBar;