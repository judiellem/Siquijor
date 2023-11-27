import React from 'react';

import Siquijormap from '../assets/Siquijormap.jpg';
import cantabon from '../assets/cantabon.jpg';
import lugnason from '../assets/lugnason.jpg';
import tulawog from '../assets/tulawog.jpg';

const Attractions = () => {
  return (
    <section className='container'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12'>
          <h3 className='uppercase font-extrabold mb-4 text-3xl md:text-4xl'>
            Things TO DO
          </h3>

          <p className='mb-10 text-gray-600 text-justify'></p>

          {/* First set of attractions */}
          <div className='grid grid-cols-12 mb-4'>
            <div className='col-span-6'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Attractions
              </h4>
              <div className='flex'>
                there are areas in Siquijor that is good to do some excercises
              </div>
            </div>
            <div className='col-span-6 flex items-center'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Location
              </h4>
              <div className='flex'>
                <img src={cantabon} alt='cantabon' className='w-16 h-16 md:w-24 md:h-24 mr-2 rounded-lg' />
                <img src={lugnason} alt='lugnason' className='w-16 h-16 md:w-24 md:h-24 mr-2 rounded-lg' />
                <img src={tulawog} alt='tulawog' className='w-16 h-16 md:w-24 md:h-24 rounded-lg' />
              </div>
            </div>
          </div>

          {/* Second set of attractions */}
          {/* Add similar grid rows for other sets of attractions */}

          {/* Third set of attractions */}
          {/* ... */}

        </div>
      </div>
    </section>
  );
};

export default Attractions;
