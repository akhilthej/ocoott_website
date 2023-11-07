import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeSlider = () => {
  const carouselData = [
    {
      imageSrc: 'https://image.tmdb.org/t/p/original//hVMoqvXs5j9ffun56tZ5YhliSD9.jpg',
      title: 'Slide 1',
      description: 'This is the first slide description.',
      buttons: [
        {
          label: 'Watch Now',
          url: 'https://example.com/slide1/watch',
        },
        {
          label: 'More Info',
          url: 'https://example.com/slide1/info',
        },
      ],
    },
    {
      imageSrc: 'https://image.tmdb.org/t/p/original//hVMoqvXs5j9ffun56tZ5YhliSD9.jpg',
      title: 'Slide 2',
      description: 'This is the second slide description.',
      buttons: [
        {
          label: 'Watch Now',
          url: 'https://example.com/slide2/watch',
        },
        {
          label: 'More Info',
          url: 'https://example.com/slide2/info',
        },
      ],
    },
    {
      imageSrc: 'https://image.tmdb.org/t/p/original//hVMoqvXs5j9ffun56tZ5YhliSD9.jpg',
      title: 'Slide 3',
      description: 'This is the third slide description.',
      buttons: [
        {
          label: 'Watch Now',
          url: 'https://example.com/slide3/tickets',
        },
        {
          label: 'More Info',
          url: 'https://example.com/slide3/trailer',
        },
      ],
    }
  ];

  return (
    <div className="h-1/2 screen z-0 mt-0 lg:-mt-20">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="h-full"
      >
        {carouselData.map((slide, index) => (
          <div key={index} className="relative h-full">
            <img src={slide.imageSrc} alt={`Slide ${index + 1}`} className="h-full" />
            <div className="pl-10 carousel-content absolute inset-0 flex flex-col justify-center items-start text-left text-white">
              <h2 className="cursor-default text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-left text-white tracking-tight ">{slide.title}</h2>
              <p className="text-sm md:text-base text-left">{slide.description}</p>
              <div className="mt-4 space-x-2">
                {slide.buttons.map((button, btnIndex) => (
                  <a key={btnIndex} href={button.url} target="_blank" rel="noopener noreferrer">
                    <button className="carousel-button transform rounded-md bg-white px-2 sm:px-5 py-2 sm:py-3 font-medium text-black transition-colors hover:bg-black hover-text-black">
                      {button.label}
                    </button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlider;
