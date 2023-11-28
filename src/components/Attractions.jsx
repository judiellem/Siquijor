import React from 'react';

import Foods from '../assets/Foods.jpg';
import Celebrations from '../assets/Celebrations.jpg';
import locations from '../assets/locations.jpg';
import Hotspots from '../assets/locations.jpg';

const Attractions = () => {
  return (
    <section className='container'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12'>
          <h3 className='uppercase font-extrabold mb-4 text-3xl md:text-4xl'>
            Things TO DO
          </h3>

          <p className='mb-10 text-gray-600 text-justify'></p>


          <div className='grid grid-cols-12 mb-4'>
            <div className='col-span-6'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Locations
              </h4>
              <div className='flex'>
                Paliton Beach - San Juan, Siquijor <br />
                San Agustin of Hippo Church - 6227 San Juan, Siquijor <br />
                Lugnason Falls - Barangay Napo, San Juan, Siquijor <br />
                Old Enchanted Balete Tree - Siquijor Circumferential Road, Lazi, Siquijor <br />
                Lazi Church - Siquijor Circumferential Road, 6228 Lazi, Siquijor <br />
                Lazi Convent - Siquijor CIrcumferential Road, 6228 Lazi, Siquijor <br />
                Lagaan Falls - Lazi, Siquijor <br />
                Hapitanan Beach - Siquijor Circumferential Road, Lazi, Siquijor <br />
                Cambugahay Falls - 4JQG+XM3, Siquijor Circumferential Road, Lazi, Siquijor <br />
                Salagdoong Beach - Barangay Olang, Maria, Siquijor <br />
                Butterfly Sanctuary - 5JR3+M33, Lazi, Siquijor <br />
                Cantabon Cave - Barangay Cantabon, Siquijor, Siquijor <br />
                Tulapos Marine Sanctuary - 7JMR+MV6, Siquijor Circumferential Road, Enrique Villanueva, Siquijor <br />
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex flex-col'>
                <div className='flex'>
                  <img src={locations} alt='locations' className='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-12 mb-4'>
            <div className='col-span-6'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Hotspots
              </h4>
              <div className='flex'>
                Hiking & Trekking - Red <br />
                Snorkeling - Yellow <br />
                Cliff Jumping - Blue <br />
                Rope Climbing - Green <br />
                Skydiving - Violet <br />
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex flex-col'>
                <div className='col-span-6'>
                  <div className='flex flex-col'>
                    <div className='flex'>
                      <img src={Hotspots} alt='Hotspots' className='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='grid grid-cols-12 mb-4'>
            <div className='col-span-6'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Food Delicacies
              </h4>
              <div className='flex'>
                Sutukil - 102 Siquijor Circumferential Road, Larena, Siquijor<br />
                Law-Uy sa Baruto - San Juan, Maite, Siquijor, 6227 Siquijor<br />
                Saang sa Alat - Barangay Road, Larena, Siquijor<br />
                Saluwaki - Upper Cambugahay Road, Lazi 6228 Siquijor<br />
                Binas-oy - 5FFG+7G7, San Juan, Siquijor<br />
                Pan Bisaya - 7M82+9FM, Enrique Villanueva, Siquijor<br />
                Giant Otap - 7JHW+54X, Talingting, Old National Highway, Enrique Villanueva<br />
                Fruit Wine - Ayra Fruit Wine, 7JX7+R4 Enrique Villanueva, Siquijor<br />
                Siquijors Tablea - Larena 6226, Siquijor<br />
                Peanut Balls - 6G77+FFF, Siquijor<br />
                Kan oy Bisaya - 6G76+3XJ, Siquijor, Circumferential Road, Siquijor<br />
                Pancit Molo - 6G76+5XJ, Siquijor, Circumferential Road, Siquijor<br />
                Palagsing - Siquijor, 6225, Siquijor<br />
                Hinalo - Siquijor, 6225 Siquijor<br />
                Peanut Crunch - 6HF6+6FJ, Siquijor<br />
                Nilagpang na Bangus - Siquijor, 6225 Siquijor<br />
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex flex-col'>
                <div className='flex'>
                  <img src={Foods} alt='snorkelling' Foods='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
                </div>
              </div>
            </div>
          </div>



          <div className='grid grid-cols-12 mb-4'>
            <div className='col-span-6'>
              <h4 className='uppercase font-extrabold mb-2 text-xl md:text-2xl'>
                Celebrations
              </h4>
              <div className='flex'>
                Bugwas Festival <br />
                Solili Festival <br />
                Dilaab Festival<br />
                Pamukad Festival<br />
                Canoan Festival<br />
                Saging Festival<br />
                Lubi Festival<br />
                Healing Festival<br />
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex flex-col'>
                <div className='flex'>
                  <img src={Celebrations} alt='Celebrations' Foods='w-16 h-16 md:w-2/3 md:h-2/3 rounded-lg mr-2' />
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
