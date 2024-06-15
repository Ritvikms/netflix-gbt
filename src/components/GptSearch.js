import { BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return (
    <div className="">
        <div className="absolute -z-10">
        <img src={BG_IMG}
        alt="backgroundImage"
        />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    )
};

export default GptSearch;