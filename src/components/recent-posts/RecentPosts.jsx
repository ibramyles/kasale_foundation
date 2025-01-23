/** @format */

import Link from 'next/link';

const RecentPosts = () => {
  return (
    <div className='border-2 w-full rounded-lg mx-auto lg:mx-0 border-dotted p-4 px-8'>
      <h4 className='pb-4 font-bold text-center text-brand-accent text-xl'>
        Recent Posts
      </h4>
      <ul className='flex flex-col space-y-2 w-full list-disc'>
        <li className='hover:text-brand-accent'>
          <Link href='/programs/ict-digitalhub'>Sanitary pads for girls</Link>
        </li>
      </ul>
      <div className='flex justify-center'>
        <button
          type='button'
          className='p-3 mt-6 mx-auto bg-accent1 text-white hover:bg-opacity-50 rounded-lg'
        >
          <Link href='/events' className=''>
            Visit Blog Page
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RecentPosts;
