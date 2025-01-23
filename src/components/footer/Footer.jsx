/** @format */

import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebook,
  FaPhone,
  FaYoutube,
  FaLink,
  FaChevronRight,
  FaTiktok,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-purple-950 to-black'>
      <div className='footer-section1 w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 pb-24 lg:grid-cols-3'>
        {/* footer section 1 */}
        <div className='col-span-2 order-2 lg:order-1 flex flex-col space-y-8 pt-12'>
          <div className='logo flex justify-center lg:justify-start'>
            <Image
              src='/kasale-ngo-logo.jpg'
              alt='kasale foundation logo'
              width={120}
              height={60}
            />
          </div>
          <p className='text-white lg:pr-24 text-center lg:text-left'>
            Our vision is to have a nation in which every child attains the
            right to survival, protection, development and participation in
            innovative and practical skills, find hope in the Lord as a vessel
            to redeem and comfort them in their troubles for improved
            livelihoods in the community.
          </p>
        </div>
        {/* footer section 2 */}
        <div className='flex flex-col gap-8 order-1 lg:order-2 bg-slate-200 bg-opacity-50 px-8 pt-24 pb-4 rounded-b-3xl'>
          <div className='flex font-bold flex-col gap-3 text-gray-text'>
            <Link href='/about'>
              <FaChevronRight className='mr-2 inline-block' />
              About
            </Link>
            <Link href='/contact'>
              <FaChevronRight className='mr-2 inline-block' />
              Contact Us
            </Link>
            <Link href='/blog'>
              <FaChevronRight className='mr-2 inline-block' />
              Blog
            </Link>
            <Link href='/donate'>
              <FaChevronRight className='mr-2 inline-block' />
              Donate
            </Link>
            <Link href='/gallery'>
              <FaChevronRight className='mr-2 inline-block' />
              Gallery
            </Link>
          </div>
          <div className='social-icons flex gap-8'>
            <Link
              href='https://www.facebook.com/kasalefoundation/'
              target='_blank'
            >
              <FaFacebook className='inline-block text-2xl' />
            </Link>
            <Link
              href='https://www.instagram.com/kasalefoundation/'
              target='_blank'
            >
              <FaInstagram className='inline-block text-2xl' />
            </Link>
            <Link
              href='https://youtube.com/@kasalefoundationuganda?si=dInw7nAeNZ3AlwHQ'
              target='_blank'
            >
              <FaYoutube className='inline-block text-2xl' />
            </Link>
          </div>
        </div>
      </div>
      <div className=''>
        {/* Copyright */}
        <div className='text-sm'>
          <div className='text-center w-11/12 lg:w-9/12 mx-auto lg:justify-between lg:flex text-gray-text py-2 lg:items-center'>
            <div className=''>
              <p>&copy; 2024 | Kasale Foundation</p>
              <p>All rights reserved</p>
            </div>

            <Link href='https://thebulbmagazine.com/' target='_blank'>
              Powered by{' '}
              <span className='text-brand-accent'>
                Myles <FaLink className='inline-block' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
