import React from 'react';

import lugnason from '../assets/lugnason.jpg';
import snorkelling from '../assets/snorkelling.jpg';

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
                Trekking is one of the best exercises in Siquijor
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex flex-col'>
                <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                  Location
                </h4>
                <div className='flex'>
                  <img src={lugnason} alt='lugnason' className='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                  <img src={lugnason} alt='lugnason' className='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                </div>
              </div>
            </div>
          </div>


          {/* Second set of attractions */}
          <div className='grid grid-cols-12 mb-4'>
            <div className='col-span-6'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Attractions
              </h4>
              <div className='flex'>
                Trekking is one of the best exercises in Siquijor
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex flex-col'>
                <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                  Location
                </h4>
                <div className='flex'>
                  <img src={lugnason} alt='lugnason' className='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                  <img src={lugnason} alt='lugnason' className='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                </div>
              </div>
            </div>
          </div>

          {/* Third set of attractions */}
          <div className='grid grid-cols-12 mb-4'>
            <div className='col-span-6'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Snorkling
              </h4>
              <div className='flex'>
                There are lots of great snorkel spots dotted the whole way around the island.
                I simply suggest hiring your own snorkel gear and trying different spots you can find.
                I know that you can go with a company who will take you on a boat to coral reefs,
                so if you want guaranteed fish, then perhaps organise a tour.  Again, there are a variety of
                tour agencies popping up on Siqiujor, but if you're struggling, ask your hotel/hostel for advice.
                It's such as small island that everyone knows someone!
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex flex-col'>
                <div className='flex'>
                  <img src={snorkelling} alt='snorkelling' className='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
