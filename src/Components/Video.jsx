import React from 'react';
import "../Style/Video.css"

const VideoPlayer = ({ videoSrc, videoTitle }) => {
  return (
    <div className="video-container">
      <h2>{videoTitle}</h2>
      <iframe 
        width="100%" 
        height="450" 
        src={videoSrc} 
        title={videoTitle} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default VideoPlayer;
