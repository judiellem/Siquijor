import React from 'react';

import Siquijormap from '../assets/Siquijormap.jpg';

const Search = () => {
  return (
    <section className='container px-4 my-16 grid gap-8 md:grid-cols-3'>
      <div className='md:col-span-2'>
        <h3 className='uppercase font-extrabold mb-4'>
          luxury included vacations
        </h3>
        <p className='mb-10 text-gray-600 text-justify'>
          Siquijor is the third smallest province in the Philippines.
          It has one congressional district and is classified as a 5th class province.
          The province is  slowly gaining recognition through social media. Siquijor is
          the center of mystic power and the capital of mystic activities. But it is hidden in a
          beautiful natural and historical attraction that affects gaining tourists.
        </p>

      </div>


      <div>

        <img
          src={Siquijormap}
          alt='Siquijormap'
          className='w-full h-full object-cover'
        />


      </div>
    </section>
  );
};

export default Search;
