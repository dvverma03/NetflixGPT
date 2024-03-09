import React from 'react';
import { useSelector } from 'react-redux';
import Postercards from './Postercards';
import SchimmerUI from "./schimmerUI/SchimmerUI.js"

const GptSuggestions = ({toggle}) => {
  const { movieResults } = useSelector((store) => store.gpt);
  return (
    <div className=' bg-black bg-opacity-70 w-screen mt-[250px] md:mt-6 box-border'>

      {
        (!movieResults)?( toggle && <div className="my-4 mx-3 md:m-6 p-3 md:p-4 bg-black bg-opacity-80"><SchimmerUI /><SchimmerUI /><SchimmerUI /></div>):
        <>
        {movieResults.map((movies, index) => (
        <div key={index} className='flex '>
             <div className='flex overflow-x-auto w-screen scrollbar-hide' >
        <div className='flex'>
              {
                movies.results.map((movie)=>(<Postercards {...movie} />))
            }
        </div>
      </div>
           
        </div>
      ))}
        </>
      }


    </div>
  );
};

export default GptSuggestions;

