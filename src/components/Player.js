import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Player = () => {
  const { videoId } = useParams();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get('name');
  const director = searchParams.get('director');
  const gener = searchParams.get('gener');
  const rating = searchParams.get('rating');
  const thumbnail = searchParams.get('thumbnail');

  useEffect(() => {
    setPlaying(true);
  }, [videoId]);

  return (
    <div>

      <div className="h-3/6 grid grid-cols-2 gap-4">
        {/* Left Column (Video) */}
        <div className="col-span-1">
          <div className="m-10 flex items-center justify-center my-auto">
            <ReactPlayer
              url={decodeURIComponent(videoId)}
              width="100%"
              height="100%"
              playing={playing}
              controls={true}
              onEnded={() => setPlaying(false)}
            />
          </div>
        </div>
      
        {/* Right Column (Text) */}
        <div className="col-span-1">
          <h1 className="text-white text-center">Title: {name}</h1>
          <h3 className="text-white text-center text-sm">Director: {director}</h3>
          <h2 className="text-white text-center text-xs">Genre: {gener}</h2>
          <p className="text-white text-center">Rating: {rating}</p>
        </div>
      </div>

      <section>
      <img src={thumbnail} alt={name} />
      </section>
    </div>
  );
};

export default Player;
