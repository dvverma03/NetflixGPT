import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, popularity,release_date, vote_average }) => {
  const navigate = useNavigate();
 const [showInfo, setShowInfo]= useState(false);
  function onClickHandler() {
    navigate("/videoplay");
  }

  function toggleInfo(){
    setShowInfo(!showInfo)
  }
  return (
    <div className="w-screen aspect-video pt-[17%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold font-serif">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-2/5">{overview}</p>
      <div className="my-4 md:m-0">
        <button onClick={onClickHandler} className=" bg-white text-black py-1 md:py-2 px-3 md:px-8 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button
        onClick={toggleInfo}
        className="hidden md:inline-block mx-2 w-[180px] bg-gray-500 text-white p-2 px-3 text-xl bg-opacity-50 rounded-lg">
          {!showInfo ? "More Info 🔽 ":"Less Info  🔼"}
        </button>
        {showInfo &&  <div className="mt-8">
          <div className="text-3xl">Title:{title}</div>
          <div className="text-[18px] pt-2 w-[70%]">Overview : {overview}</div>
          <div>Release Date : {release_date}</div>
          <div>Popularity : {popularity}</div>
          <div>Vote Average : {vote_average}</div>
        </div>}
      </div>
    </div>
  );
};
export default VideoTitle;
