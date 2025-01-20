/** @format */

import Image from 'next/image';
import { FaUsers } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaDonate } from 'react-icons/fa';
import Link from 'next/link';

const IntroSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 w-11/12 lg:w-9/12 lg:gap-16 mx-auto mb-24'>
      {/* intro section */}
      <div className='right-side col-span-2 lg:pr-16'>
        <p className='text-base pt-2 lg:pt-0'>
          <span className='underline underline-offset-4'>
            KASALE FOUNDATION:
          </span>{' '}
          EVERYONE MATTERS
        </p>
        <h2 className='font-bold text-3xl lg:text-4xl pb-6 uppercase pt-2'>
          BREAKING BARRIERS, BUILDING FUTURES
        </h2>
        <p className='pb-8'>
          At Kasale Foundation, we empower marginalized communities in Uganda.
          Our mission is to bridge the gap between potential and reality,
          unlocking the full potential of our beneficiaries.
        </p>
        <p className=''>
          We believe every individual deserves an opportunity for a bright
          future, regardless of their background or circumstances. Our work is
          guided by a simple yet profound question: "What if?" What if we could
          educate children, empower women, and bring healthcare to remote
          communities?
        </p>
        <p className='pb-8'>
          Through our programs, we've provided scholastic materials,
          entrepreneurship support, and health education to those in need. Our
          story is about people, transformed communities, and collective
          efforts.
        </p>

        <Link href='/about' className=''>
          <button
            type='button'
            className='p-4 rounded-lg font-bold bg-brand-accent text-white hover:bg-opacity-90 bg-accent1'
          >
            MORE ORGANISATION INFO
          </button>
        </Link>
      </div>
      {/* from our blog */}
      <div className='left-side border-2 h-max border-dotted flex flex-col rounded-md overflow-hidden mt-24 lg:mt-0'>
        <div className='flex justify-center overflow-hidden max-h-60'>
          <Image
            src='/care3.jpg'
            className='object-cover w-full'
            width={400}
            height={400}
            alt='img'
          />
        </div>

        <div className='post-info flex flex-col p-4'>
          {/* Data */}
          <div className='published-deatils pb-4 flex justify-between'>
            <span>16 OCT 2024</span>
            <span>By: Admin</span>
          </div>
          <h3 className='font-bold mb-4'>
            Kasale Foundation Unveils New Scholarship Program for Remote
            Students
          </h3>
          <Link href='/blog'>
            <button className='p-3 hover:bg-brand-accent border-2 text-brand-accent rounded-md font-bold hover:text-white'>
              View Blog Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
