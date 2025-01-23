/** @format */

import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const DonatePage = () => {
  return (
    <div className=''>
      <section className='page'>
        <div className='w-11/12 lg:w-9/12 text-white mx-auto'>
          <h2 className='pb-4'>Support Us</h2>
          <p>You can support our mission and change lives.</p>
        </div>
      </section>
      <div className=''>
        <h3 className='text-3xl lg:text-4xl font-bold text-center text-slate-500 '>
          BANK DETAILS
        </h3>
        <div className='flex gap-3 mt-2 mb-8 items-center w-60 mx-auto'>
          <div className='border-b-2 w-5/12'></div>
          <FaHeart className='text-brand-accent animate-heart text-lg w-2/12' />
          <div className='border-b-2 w-5/12'></div>
        </div>
        <div className='bank-details w-11/12 lg:w-10/12 mx-auto flex justify-center'>
          <div className='space-y-6 lg:text-left'>
            <p className='text-center'>
              Bank Name:{' '}
              <span className='font-bold'>STANBIC BANK UGANDA LIMITED</span>
            </p>
            <p className='text-center'>
              Account Name:{' '}
              <span className='font-bold'>KASALE FOUNDATION UGANDA</span>
            </p>
            <p className='text-center'>
              Account No: <span className='font-bold'>9030024929026</span>
            </p>
            <p className='text-center'>
              Swift Code: <span className='font-bold'>SBICUGKX</span>
            </p>
            <p className='text-center'>
              Address: <span className='font-bold'>P.O BOX 544, IGANGA.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
