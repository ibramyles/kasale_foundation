/** @format */
'use client';

import React, { useState } from 'react';
import OurTeam from '@/components/our-team/OurTeam';
import WhatWeDo from '@/components/what-we-do/WhatWeDo';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserFriends } from 'react-icons/fa';

const AboutPage = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  const fullStory = `
    As I sit down to write this essay, I am reminded of the countless individuals who have inspired me throughout my journey. From my days as an orthopaedic technician to my current role as an Executive Director of Kasale Foundation, my passion for creating a better world has only grown stronger. With a career in orthopaedics, I could have easily pursued a lucrative career in the medical field. However, my experience working with patients from marginalised communities opened my eyes to the harsh realities of inequality and injustice. I saw firsthand how lack of access to education, economic opportunities and healthcare perpetuated cycles of poverty and suffering. This realisation sparked a sense of purpose within me. I knew that I had to do more than just treat physical ailments; I had to address the root causes of suffering. And so, I embarked on a journey to make a difference. As I look to the future, I am filled with a sense of hope and determination. I know that creating a better world will require collective efforts, perseverance and commitment. But I also know that together, we can achieve greatness. Join our quest, support our programs, volunteer your time and advocate for policies that promote equality and justice in order to build a world where every individual can thrive and reach their full potential.
  `;

  const halfStory = fullStory.substring(0, fullStory.length / 2) + '...';

  return (
    <div>
      <section className='page'>
        <div className='w-11/12 lg:w-9/12 text-white mx-auto'>
          <h2 className='pb-4'>About Our Organisation</h2>
          <p>
            Learn more about our organisation, our mission, vision, and what we
            are doing to make a difference in the world.
          </p>
        </div>
      </section>
      <div className='mx-auto'>
        {/* Our mission and vision */}
        <section className='w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <section className='flex order-2 lg:order-1'>
            <section>
              <h2 className='text-2xl font-semibold text-brand-accent mb-4'>
                Vision
              </h2>
              <p className='text-gray-600 leading-loose'>
                To have a nation in which every child attains the right to
                survival, protection, development and participation in
                innovative and practical skills, find hope in the Lord as a
                vessel to redeem and comfort them in their troubles for improved
                livelihoods in the community.
              </p>
              <h2 className='text-2xl font-semibold text-brand-accent mt-8 mb-4'>
                Mission
              </h2>
              <p className='text-gray-600 leading-loose'>
                To support vulnerable children, realize all their rights to
                survive, education and entrepreneurship vocational development
                skills, protection and participation, spiritual socialization,
                through a coordinated multi-sectorial approach that will
                transform their Social – Economic welfare.
              </p>
            </section>
          </section>
          <section className='shadow-lg rounded-md lg:rounded-none order-1 overflow-hidden'>
            <Image
              src='/school garden.jpg'
              width='600'
              height='500'
              className='object-cover w-full h-auto'
              alt='the-bulb-magazine'
            />
          </section>
        </section>
        {/* Founder's Story */}
        <section className='mt-48'>
          <section className='relative border-2 w-11/12 rounded-xl border-dotted lg:w-6/12 mx-auto'>
            <div className='founder-image -mt-20 w-40 h-40 mx-auto'>
              <Image
                src='/kisoma fahad.jpg'
                width={200}
                height={200}
                alt='founder'
                className='rounded-full'
              />
            </div>
            <p className='text-center font-bold mt-8'>Founder's Story</p>
            <div className='story text-center p-8 leading-loose'>
              <p>{showFullStory ? fullStory : halfStory}</p>
              {!showFullStory && (
                <button
                  className='mt-4 p-2 bg-brand-accent text-white rounded'
                  onClick={() => setShowFullStory(true)}
                >
                  Read More
                </button>
              )}
            </div>
          </section>
        </section>
        {/* What we offer */}
        <WhatWeDo />
        {/* Our team */}
        <OurTeam />
        <section className='join-us mb-24 mt-24 w-11/12 lg:w-9/12 mx-auto rounded-lg bg-slate-400 p-8 lg:p-16 shadow-lg grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
          <div className='order-2 lg:order-1'>
            <h2 className='text-3xl font-bold text-white text-center lg:text-left mb-4'>
              JOIN US
            </h2>
            <p className='text-white mb-4 text-center lg:text-left'>
              We invite you to be part of our journey. Whether you’re a
              customer, partner, or supporter, together, we can achieve great
              things.
            </p>
            <Link
              href='/contact'
              className='flex justify-center lg:justify-start'
            >
              <button className='p-3 rounded-lg bg-brand-accent hover:bg-opacity-50 text-white font-bold'>
                Join Us
              </button>
            </Link>
          </div>
          <div className='icon flex justify-center order-1 lg:order-2'>
            <FaUserFriends className='text-9xl text-white' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
