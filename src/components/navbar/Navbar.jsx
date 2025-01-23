/** @format */

import Link from 'next/link';
import NavLinks from './links/NavLinks';
import {
  FaPhone,
  FaHeart,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image';

const Navbar = async () => {
  return (
    <div className='relative navbar h-32 z-50 w-11/12 lg:w-9/12 flex flex-col justify-between mx-auto rounded-b-2xl'>
      {/* top nav section */}
      <div className='top-nav relative hidden w-full py-3 lg:bg-slate-700 lg:flex justify-between px-8 items-center'>
        <div className='flex gap-8 items-center text-white text-xs'>
          <span>
            <FaPhone className='text-white inline mr-3' size={20} />
            +256 703 643582
          </span>
          <span>
            <FaEnvelope className='text-white inline mr-3' size={20} />
            Email info@kasalefoundation.org
          </span>
        </div>
        <div className='-mr-56'>
          <div className='flex gap-4'>
            <Link
              href='https://www.facebook.com/profile.php?id=100086391490116&mibextid=ZbWKwL'
              target='_blank'
            >
              <FaFacebook className='inline-block text-white text-xl' />
            </Link>
            <Link
              href='https://www.instagram.com/kasale_foundation_ug/'
              target='_blank'
            >
              <FaInstagram className='inline-block text-white text-xl' />
            </Link>
            <Link
              href='https://youtube.com/@kasalefoundationuganda?si=dInw7nAeNZ3AlwHQ'
              target='_blank'
            >
              <FaYoutube className='inline-block text-white text-xl' />
            </Link>
          </div>
        </div>
        {/* DONATE BUTTON */}
        <Link href='/donate'>
          <button className='absolute right-0 top-0 bg-purple-700 text-white py-3 px-8'>
            <FaHeart className='text-white inline mr-3' size={20} />
            Donate Now
          </button>
        </Link>
      </div>
      {/* bottom nav section */}
      <div className='flex justify-between items-center shadow-2xl h-20 lg:h-full bg-white lg:bg-opacity-80 rounded-b-2xl px-4 lg:px-8 py-1 z-30 lg:py-2'>
        <Link href='/'>
          <div className='logo flex gap-4 items-center'>
            <Image
              width={60}
              height={60}
              className='h-auto'
              src='/logo-resized.png'
              alt='logo'
            />{' '}
            <span className='hidden lg:flex font-bold'>Kasale Foundation</span>
            <span className='lg:hidden font-bold'>
              Kasale <br /> Foundation
            </span>
          </div>
        </Link>
        {/* <div className='user-account absolute hidden lg:flex right-24 top-5'>
        <UserProfile />
      </div> */}
        <div className='links py-4 flex justify-center'>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
