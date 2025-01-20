/** @format */

import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const CTA = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/re-usable-sanitary-pads.jpg')`,
      }}
      className='dark-overlay relative bg-cover bg-center bg-no-repeat'
    >
      <section className='w-11/12 lg:w-9/12 grid z-10 grid-cols-1 lg:grid-cols-2 py-24 space-y-8 lg:gap-0 mx-auto items-center'>
        <div className='space-y-4 flex flex-col items-center lg:items-start justify-center'>
          <p className='uppercase text-brand-accent z-10 font-bold'>
            Care & support
          </p>
          <h3 className='text-4xl font-bold text-center z-10 text-white lg:text-left'>
            Distribution of Re-Usable Sanitary Pads
          </h3>
          <p className='text-white z-10'>Empowering Girls, Enhancing Dignity</p>
        </div>
        <div className='flex items-center justify-center'>
          <Link
            className='py-4 px-8 z-10 bg-brand-accent font-bold hover:bg-opacity-50 text-white'
            href='/donate'
          >
            SUPPORT <FaHeart className='ml-2 inline' />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CTA;
