/** @format */
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
export default function PostCard({ product }) {
  console.log(product);

  return (
    // Post Card Component
    <div className='border-2 border-dotted flex flex-col'>
      <div className='border-2 overflow-hidden flex justify-center h-60'>
        <Image
          src='/garden-1.jpg'
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
          Kasale Foundation Unveils New Scholarship Program for Remote Students
        </h3>
        <Link href='/blog/1'>
          <button className='p-2 rounded-md border-2 font-bold text-brand-accent'>
            View Post <FaArrowRight className='inline ml-1' />
          </button>
        </Link>
      </div>
    </div>
  );
}
