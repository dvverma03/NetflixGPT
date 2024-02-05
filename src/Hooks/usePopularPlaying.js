import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant'
import { addPopularPlayings } from '../utils/movieSlice'
import { useEffect } from 'react';


const usePopuarPlayings =()=>{
    const dispatch = useDispatch();

  const getNowPlaying = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
     const json = await data.json();
     
    dispatch(addPopularPlayings(json.results))
  }

 useEffect (()=>{
    getNowPlaying()
  }, [])

}


export default usePopuarPlayings;