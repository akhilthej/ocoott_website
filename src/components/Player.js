import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import StarRating from '../components/StarRating';
import TeluguSlider from '../components/Sliders/TeluguSlide'

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
    <main>
    <section className="grid grid-cols-2 gap-4">
  <div className="col-span-1">
    <div className="m-10 h-96 flex items-center justify-center">
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
  <div className="col-span-1 flex items-center justify-center">
    <div className="text-left text-white">
      <h1 className='font-light text-2xl'>{name}</h1>
      <h3 className="text-white text-sm">Director: {director}</h3>
      <h2 className="text-white text-xs">{gener}</h2>
      <StarRating rating={rating} />
    </div>
  </div>
</section>

    

<section className="container mx-auto mt-8">
  <div className="flex flex-col items-center sm:flex-row sm:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
    <img className="w-48 h-58" src={thumbnail} alt={name} />
    <div className="text-white">
      <h1 className="font-light text-2xl">{name} (Year)</h1>
      <h3 className="text-sm">Director: {director}</h3>
      <h2 className="text-xs">Genre: {gener}</h2>
      <StarRating rating={rating} />
    </div>
    
  </div>
</section>





     

<TeluguSlider/>


    </main>
  );
};

export default Player;
