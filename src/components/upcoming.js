import React from 'react';
import Postercards from './Postercards';

const UpcomingMovieList = ({ title, moviesList }) => {
  return (
    <div className=' box-border'>
      <h1 className='text-3xl pl-4 text-white py-4 my-4 '>{title}</h1>
      <div className='flex overflow-x-scroll w-screen scrollbar-hide' >
        <div className='flex'>

        {moviesList?.upcomingPlaying?.map((e) => (
            <Postercards {...e} />
        
        ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovieList;
