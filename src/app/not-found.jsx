/** @format */

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center py-16'>
      <h2 className='text-3xl text-gray-400 font-bold'>Page Not Found!</h2>
      <p>
        Back To
        <Link
          href='/'
          className='p-3 text-brand-accent font-bold underline rounded-md'
        >
          Home
        </Link>{' '}
        or
        <Link
          href='/blog'
          className='p-3 text-brand-accent font-bold underline rounded-md'
        >
          Check Our Blog
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
