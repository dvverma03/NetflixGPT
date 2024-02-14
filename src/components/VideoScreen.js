import React from 'react'
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const VideoScreen = () => {
    const key = useSelector((store)=> store)
  return (
    <div>
       <VideoBackground movieId={key.id}/>
    </div>
  )
}

export default VideoScreen

