import React from 'react';




import tahanan from '../assets/tahanan.jpg';
import nifahut6 from '../assets/nifahut6.jpg';
import hifahut2 from '../assets/hifahut2.jpg';
import hifahut3 from '../assets/hifahut3.jpg';
import nipahut from '../assets/nipahut.jpg';

import borabora2 from '../assets/borabora2.jpg';
import maldives1 from '../assets/maldives1.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';

const Destinations = () => {
  return (
    <section className='container px-4 flex flex-col items-center my-16'>
      <h2 id="Destination" className='mb-4'>Siquijor's Wonders</h2>
      <p className='mb-8 font-bold'>One of the Destinations in the Philippines</p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        <div className='col-span-2 md:col-span-3 md:row-span-2'>
          <img
            src={hifahut3}
            alt='hifahut3'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={nipahut}
            alt='nipahut'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={hifahut2}
            alt='hifahut2'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={tahanan}
            alt='tahanan'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src={nifahut6}
            alt='nifahut6'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
