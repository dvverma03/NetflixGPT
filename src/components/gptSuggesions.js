import { useSelector } from 'react-redux';
import Postercards from './Postercards';
const GptSuggestions = () => {
  const { movieResults } = useSelector((store) => store.gpt);
  if (!movieResults) return null;
  return (
    <div className='bg-black bg-opacity-70 w-screen mt-6 box-border'>
      <div className='bg-black bg-opacity-70 w-screen mt-[250px] md:mt-6 box-border'>
        {movieResults.map((movies, index) => (
          <div key={index} className='flex'>
            <div className='flex overflow-x-auto w-screen scrollbar-hide'>
              {movies.results.map((movie) => (
                <Postercards img={movie?.poster_path} key={movie?.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;
