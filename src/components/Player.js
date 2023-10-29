import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { TeluguMoviesData } from '../components/DATA/MoviesData';

const Player = () => {
  const { videoId } = useParams();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setPlaying(true);
  }, [videoId]);

  return (
    <div>
    <div className="min-h-screen grid grid-cols-2 gap-4">
      {/* Left Column (Video) */}
      <div className="col-span-1">
        <div className="m-10 w-auto h-1/2 flex items-center justify-center my-auto">
          <ReactPlayer
            url={decodeURIComponent(videoId)}
            width="100%"
            height="100%"
            playing={playing}
            controls={true}
            onEnded={() => setPlaying(false)} // Pause when the video ends
          />
        </div>
      </div>
  
      {/* Right Column (Text) */}
      <div className="col-span-1">
      {TeluguMoviesData.map((movie) => (
        <div>
      <h1 className="text-white text-center">Title :</h1>
              <h3 className="text-white text-center text-sm">Director :</h3>
              <h2 className="text-white text-center text-xs">Gener:</h2>
              </div>
              ))}
      </div>
    </div>
  </div>
  



  );
};

export default Player;
