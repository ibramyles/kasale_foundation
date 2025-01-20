/** @format */
'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Partners = () => {
  const partners = [
    {
      id: 1,
      src: '/partner-1.jpg',
    },
  ];
  return (
    <section className='newsletter py-20'>
      <div className='w-11/12 lg:w-full mx-auto flex flex-col gap-6 lg:gap-10'>
        <div>
          <h4 className='mb-2 text-3xl text-brand-accent text-center font-bold'>
            Our <span className='text-slate-500'>Partners</span>
          </h4>
        </div>

        <Marquee>
          <div className='flex gap-16 w-11/12 justify-center mx-auto'>
            {partners.map((partner) => (
              <div className='flex items-center' key={partner.id}>
                <Image
                  src={partner.src}
                  alt='logo'
                  width={150}
                  height={150}
                  className='h-28 mt-6 w-auto'
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
