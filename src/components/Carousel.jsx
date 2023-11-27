import React, { useState } from 'react';

import coralcayresort from '../assets/coralcayresort.jpg';
import hifahut4 from '../assets/hifahut4.jpg';
import lugnasonfallssiquijor from '../assets/lugnasonfallssiquijor.jpg';
import nifahut5 from '../assets/nifahut5.jpg';
import nifahut7 from '../assets/nifahut7.jpg';
import oldenchanted from '../assets/oldenchanted.jpg';
import salagdoong from '../assets/salagdoong.jpg';
import siquijor from '../assets/siquijor.jpg';
import salagdo from '../assets/salagdo.jpg';


const CAROUSEL_DATA = [

  {
    imgPath: hifahut4,
    alt: 'hifahut4'
  },
  {
    imgPath: lugnasonfallssiquijor,
    alt: 'lugnasonfallssiquijor'
  },
  {
    imgPath: nifahut5,
    alt: 'nifahut5'
  },
  {
    imgPath: nifahut7,
    alt: 'nifahut7'
  },
  {
    imgPath: oldenchanted,
    alt: 'oldenchanted'
  },
  {
    imgPath: salagdoong,
    alt: 'salagdoong'
  },
  {
    imgPath: siquijor,
    alt: 'siquijor'
  },
  {
    imgPath: salagdo,
    alt: 'salagdo'
  },

  // ... other images
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % CAROUSEL_DATA.length);
  };

  const decrementIndex = () => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? CAROUSEL_DATA.length - 1 : currentIndex - 1));
  };

  return (
    <section id="Views" className='container px-4 my-12 h-3/4 relative'>
      <img
        src={CAROUSEL_DATA[currentIndex].imgPath}
        alt={CAROUSEL_DATA[currentIndex].alt}
        className='rounded-md carousel-image' // Add carousel-image class
      />

      <div
        onClick={decrementIndex}
        className='absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </div>

      <div
        onClick={incrementIndex}
        className='absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded p-1 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </div>
    </section>
  );
};

export default Carousel;
