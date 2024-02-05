import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant'
import { addNowPlayings } from '../utils/movieSlice'
import { useEffect } from 'react';


const useNowPlayings =()=>{
    const dispatch = useDispatch();

  const getNowPlaying = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
     const json = await data.json();
    //  console.log(json.results)
    dispatch(addNowPlayings(json.results))
  }

 useEffect (()=>{
    getNowPlaying()
  }, [])

}

export default useNowPlayings;