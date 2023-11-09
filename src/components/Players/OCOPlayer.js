import React from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../StarRating';
import TeluguSlider from '../Sliders/TeluguSlide';
import HindiSlider from '../Sliders/OriginalsSlide';

const Player = () => {
  const { videoId } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get('name');
  const director = searchParams.get('director');
  const gener = searchParams.get('gener');
  const rating = searchParams.get('rating');
  const thumbnail = searchParams.get('thumbnail');

  return (
    <main>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 sm:py-40"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="col-span-1 sm:col-span-1">
          <div className="m-4 sm:m-10 h-96 flex items-center justify-center">
            <a href={videoId}>
              <img
                className="w-full h-full rounded-xl shadow-xl"
                src={thumbnail}
                alt={name}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  Play Now
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1 flex items-center justify-center">
          <div className="text-left text-white">
            <h1 className="font-light text-2xl">{name}</h1>
            <h3 className="text-white text-sm">Director: {director}</h3>
            <h2 className="text-white text-xs">{gener}</h2>
            <StarRating rating={rating} />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-8">
        <h2 className="text-white mx-5 sm:text-center">DETAILS</h2>
        <hr className="border-t border-gray-300 m-2" />

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

      <TeluguSlider />
      <HindiSlider />
    </main>
  );
};

export default Player;
