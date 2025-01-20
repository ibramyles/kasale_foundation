/** @format */

import React from 'react';
import { teamData } from '@/lib/data';
import Image from 'next/image';

const OurTeam = () => {
  return (
    <div className='w-11/12 lg:w-9/12 mx-auto mt-24'>
      <h2 className='text-4xl font-bold mb-8 text-brand-accent'>Our Team</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
        {teamData.map((member) => {
          return (
            <div key={member.name} className='flex flex-col items-center'>
              <div className='relative h-52 w-52 overflow-hidden rounded-full shadow-md'>
                <Image
                  className='w-full h-full rounded-full object-cover'
                  width={200}
                  height={200}
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className='p-4 text-center'>
                <h3 className='text-lg font-bold'>{member.name}</h3>
                <p className='text-sm text-gray-500'>{member.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
