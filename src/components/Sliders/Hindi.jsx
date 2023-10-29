import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {HindiMoviesData} from '../DATA/MoviesData';

const Hindi = () => {
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
    <div className='my-5'>
    <h1 className='pl-5 pb-2 cursor-default  text-2xl md:text-4xl fade-in-down font-bold text-white tracking-tight'>Hindi</h1>
      <Slider {...settings}>
        {HindiMoviesData.map((image) => (
          <div key={image.id}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img className='pl-5' src={image.thumbnail} alt={image.name} />
            </a>
            <h1 className='text-white text-center'>{image.name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hindi