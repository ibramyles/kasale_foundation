/** @format */

import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image
        src='/Spinner-1s-60px.svg'
        height={60}
        width={60}
        alt='loading...'
      />
    </div>
  );
};

export default Loader;
