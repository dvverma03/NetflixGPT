import React from 'react';
import { useSelector } from 'react-redux';
import Postercards from './Postercards';

const GptSuggesions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieResults || !movieNames) return null;

  return (
    <div className=' bg-black bg-opacity-70 w-screen mt-6 box-border'>
      {movieResults.map((movies, index) => (
        <div key={index} className='flex '>
             <div className='flex overflow-x-auto w-screen scrollbar-hide' >
        <div className='flex'>

              {
                movies.results.map((movie)=>(<Postercards img={movie?.poster_path} key={movie?.id} />))
            }
        </div>
      </div>
           
        </div>
      ))}
    </div>
  );
};

export default GptSuggesions;


// results
// : 
// Array(2)
// 0
// : 
// adult
// : 
// false
// backdrop_path
// : 
// "/gKuvFZJFgI8STwDqDtFIT4OfA6Z.jpg"
// genre_ids
// : 
// (2) [10749, 18]
// id
// : 
// 11854
// original_language
// : 
// "hi"
// original_title
// : 
// "कुछ कुछ होता है"
// overview
// : 
// "Per her mother's last wish, an 8 year old girl sets out to reunite her father with his college best friend who was in love with him."
// popularity
// : 
// 18.759
// poster_path
// : 
// "/5FmtHHDGPofW5Zjns1EM1D8503c.jpg"
// release_date
// : 
// "1998-10-16"
// title
// : 
// "Kuch Kuch Hota Hai"
// video
// : 
// false
// vote_average
// : 
// 7.492
// vote_count
// : 
// 360
