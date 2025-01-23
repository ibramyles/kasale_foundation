/** @format */

import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

const DonationCTA = () => {
  return (
    <div className='donation_cta dark-overlay relative flex flex-col py-16 items-center mb-16 mt-24'>
      <p className='text-lg text-white z-20'>Make a Difference Today</p>
      <div className='flex gap-3 mt-2 items-center w-60 mx-auto z-20'>
        <div className='border-b-2 w-5/12'></div>
        <FaHeart className='text-slate-300 text-lg w-2/12' />
        <div className='border-b-2 w-5/12'></div>
      </div>
      <h4 className='text-3xl text-center my-6 font-bold leading-normal px-6 text-white z-20'>
        BREAKING BARRIERS, BUILDING FUTURES
      </h4>
      <button className='p-4 rounded-full bg-brand-accent text-white z-20'>
        <Link href='/donate'>Support Our Mission</Link>
      </button>
    </div>
  );
};

export default DonationCTA;
