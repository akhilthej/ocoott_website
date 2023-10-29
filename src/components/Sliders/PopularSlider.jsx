import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PopularMoviesData } from '../DATA/MoviesData';

const PopularSlider = () => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  if (window.innerWidth < 768) {
    settings.slidesToShow = 3; // Show 3 slides on mobile
  } else {
    settings.slidesToShow = 6; // Show 1 slide on other screen sizes
  }

  return (
    <div className='-mt-16 sm:-mt-36  z-50 '>
      <h1 className='drop-shadow-xl cursor-default text-xl  md:text-2xl fade-in-down text-black tracking-tight px-2 sm:px-5 py-2'>Popular on Ott</h1>
      <Slider {...settings}>
        {PopularMoviesData.map((movie) => (
          <div key={movie.id}>
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              <img className='pl-1 sm:pl-5' src={movie.thumbnail} alt={movie.name} />
            </a>
            <h1 className='text-white text-center'>{movie.name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularSlider;
