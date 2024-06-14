import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () =>{
      //Fetch data from TMDB API and update the store
      const dispatch=useDispatch();

      const getTopRated=async () =>{
          const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
          const json=await data.json();
         // console.log(json.results);
          dispatch(addTopRated(json.results));
      };
  
      useEffect(() => {
        getTopRated();
      },[]);
}

export default useTopRated;