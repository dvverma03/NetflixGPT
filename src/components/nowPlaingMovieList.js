import React from 'react';
import Postercards from './Postercards';
import "../App.css"

const MovieList = ({ title, moviesList }) => {
  return (
    <div className='box-border '>
      <h1 className='text-3xl pl-4 text-white py-4 my-4 box-border'>{title}</h1>
      <div className='flex overflow-x-auto w-screen  scrollbar-hide' >
        <div className='flex'>

        {moviesList?.nowPlayingMovies?.map((e) => (
            <Postercards {...e} key={e?.id} />
        
        ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
