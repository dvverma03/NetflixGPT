import React from 'react'
import { useParams } from 'react-router-dom'
import VideoBackground from './VideoBackground';

const VideoScreen = () => {
    const param = useParams();
  const { key } = param;
  return (
    <div>
       <VideoBackground movieId={key}/>
    </div>
  )
}

export default VideoScreen
