import React from 'react';
import { HindiMoviesData } from '../components/DATA/MoviesData';
import StarRating from '../components/StarRating';
import { Link } from 'react-router-dom';

const Hindi = () => {
  return (
    <div className="my-5">
      <h1 className="pl-5 pb-2 text-center cursor-default text-2xl md:text-4xl fade-in-down font-bold text-white tracking-tight">
        Hindi
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 pl-5 pr-5">
        {HindiMoviesData.map((movie) => (
          <div key={movie.id} className="relative">
            <Link to={`/player/${encodeURIComponent(movie.link)}`} target="_blank">
              <div className="thumbnail-container">
                <img className="p-3" src={movie.thumbnail} alt={movie.name} />
                <div className="overlay"></div> {/* Black color overlay */}
              </div>
            </Link>
            <h1 className="text-white text-center">{movie.name}</h1>
            <h3 className="text-white text-center text-sm">{movie.director}</h3>
            <h2 className="text-white text-center text-xs">{movie.gener}</h2>
            <StarRating rating={movie.rating} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hindi;
