/** @format */

/** @format */
'use client';
import { useState } from 'react';
import { services } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine how many items to display based on `showAll` state
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <div className='mt-24 bg-gradient-to-r from-green-500 via-purple-500 to-green-500 py-16'>
      <h2 className='text-3xl text-brand-accent font-bold w-11/12 lg:w-9/12 mx-auto mb-6'>
        What We Do
      </h2>
      <section className='w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {visibleServices.map((service, index) => (
          <Link
            href={`/programs${service.path}`}
            key={index}
            className='p-6 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition'
          >
            <div className='items-center w-40 h-40  rounded-full overflow-hidden'>
              <Image
                src={service.img}
                width={250}
                height={400}
                alt={service.title}
                className='object-cover rounded-full w-full h-full'
              />
            </div>
            <h3 className='text-xl text-center text-brand-secondary font-semibold my-4'>
              {service.title}
            </h3>
            <p className='text-gray-600 text-center'>{service.description}</p>
          </Link>
        ))}
      </section>
      {services.length > 6 && (
        <div className='text-center mt-6'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition'
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatWeDo;
