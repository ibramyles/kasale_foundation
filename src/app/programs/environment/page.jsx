/** @format */

import React from 'react';
import SidePanel from '@/components/side-panel/SidePanel';
import Image from 'next/image';
import Link from 'next/link';
import DonationCTA from '@/components/donation-cta/DonationCTA';

const Environment = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url('/home-based-gardens-resized.jpg')`,
        }}
        className='page dark-overlay'
      >
        <div className='w-11/12 lg:w-9/12 text-white mx-auto z-10'>
          <h2 className='pb-4'>Environment</h2>
          <p>
            Promoting environmental conservation and sustainability through
            community-driven initiatives.
          </p>
        </div>
      </section>
      <section className='w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-12'>
        <section className='right-side w-full mx-auto lg:mx-0 lg:w-8/12'>
          <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-start'>
              <div className='lg:h-96'>
                <Image
                  src='/environment.jpg'
                  className='w-full object-cover lg:h-96'
                  width={1000}
                  height={1000}
                  alt='img'
                />
              </div>
              <div className='lg:h-96'>
                <Image
                  src='/environmant-2.jpg'
                  className='w-full object-cover lg:h-96'
                  width={1000}
                  height={1000}
                  alt='img'
                />
              </div>
            </div>
            <h4 className='py-4 text-3xl lg:text-4xl font-bold'>Environment</h4>
            <p className=''>
              <span className='font-bold text-brand-accent'>Taking Root:</span>{' '}
              Kasale Foundation's climate Action Initiative As the world
              grapples with the challenges of climate change, Kasale Foundation
              is taking a proactive approach to promote environmental
              sustainability and Climate action. Our innovative initiative
              combines Agroforestry with the introduction of Climate clubs in
              schools, empowering young minds to become the next generation of
              climate leaders.
            </p>
            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              KEY ACTIVITIES:
            </h4>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>Tree planting and reforestation projects.</li>
              <li className=''>
                Community workshops on waste management and recycling.
              </li>
              <li className=''>
                Promotion of clean energy solutions like solar lighting.
              </li>
              <li className=''>
                Supporting sustainable agriculture and water conservation.
              </li>
            </ul>
            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              IMPACT
            </h4>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>Increased green cover and biodiversity.</li>
              <li className=''>
                Reduced environmental degradation and pollution.
              </li>
              <li className=''>
                Empowered communities actively contributing to sustainability.
              </li>
            </ul>
          </div>
        </section>
        <SidePanel />
      </section>
      <DonationCTA />
    </div>
  );
};

export default Environment;
