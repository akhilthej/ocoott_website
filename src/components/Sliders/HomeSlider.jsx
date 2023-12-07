import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeSlider = () => {
  const carouselData = [
    {
      imageSrc: 'https://drive.google.com/uc?id=1qI7j8_HClKtVisdfrWCLR7LsVrnSkc2w',
      title: 'ShhhhQ',
      description: 'A film by Anudeep.',
      buttons: [
        {
          label: 'Watch Now',
          url: 'https://ocomovies.com/ShhhhQmovie',
        },
        {
          label: 'More Info',
          url: 'https://ocomovies.com/ocoplayer/%2FShhhhQmovie?name=Shhhh%27Q&director=Anudeep&gener=Love&rating=4.5&thumbnail=https://drive.google.com/uc?id=1LooTfIqQLNoFlaIG_PFnfTJTakRNSDu4',
        },
      ],
    },
    {
      imageSrc: 'https://drive.google.com/uc?id=1V9EP9KbKN4LyNXOcm6ImRjqwrOE49Ouw',
      title: 'Inspector Raghavan Files',
      description: 'A film by Raj Sehgal.',
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
      imageSrc: 'https://drive.google.com/uc?id=1hNFMp9omub3cWh-T6I5GqEJgXFqGBkqL',
      title: 'SPLIT',
      description: 'A film by Vijayalakshmi, Ravi.',
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
