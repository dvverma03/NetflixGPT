import React, { useRef } from "react";
import Header from "./Header";
import { openai } from "../utils/OpenAI";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import GptSuggesions from "./gptSuggesions";

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const fetchMoviesFromTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };

  async function EventHandler() {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " only give me the name of 5 movies, commas separated like example given ahead. Example Result : gadar2, sholay, golmal, koi mil gaya, kaho na pyar hai";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const moviesArray = chatCompletion.choices[0].message.content.split(",");

    const promiseArray = moviesArray.map((movies) =>
      fetchMoviesFromTMDB(movies)
    );

    const moviesDetails = await Promise.all(promiseArray);
    

    dispatch(
      addGptMovieResult({
        movieResults: moviesDetails,
        movieNames: moviesArray,
      })
    );
  }

  return (
    <div>
      <Header />
      <div className="">
        <img
          className="fixed inset-0 w-screen h-screen opacity-85 object-cover bg-fixed"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex justify-center ">
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center"
        >
          <div className="z-40 mt-44 absolute justify-center md:flex w-screen-[10px] md:w-[50%] md:bg-black p-2">
            <input
              ref={searchText}
              className="w-[90%] p-4 mx-2 my-2 align-center "
              type="text"
              placeholder="Write which you want to see"
            ></input>
            <button
              className="bg-red-500 p-4 mx-2 my-2 w-[90%] md:w-[16%] rounded-lg"
              onClick={EventHandler}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="absolute mt-[20%] w-screen h-[50%]">
        <GptSuggesions />
      </div>
    </div>
  );
};

export default GptSearch;

