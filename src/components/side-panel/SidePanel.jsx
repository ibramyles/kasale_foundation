/** @format */

import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import RecentPosts from '../recent-posts/RecentPosts';

const SidePanel = () => {
  return (
    <section className='left-side flex flex-col space-y-16 w-full lg:w-4/12'>
      <div className='border-2 w-full rounded-lg mx-auto lg:mx-0 border-dotted p-10'>
        <h4 className='pb-6 font-bold text-center text-brand-accent text-xl'>
          All Programs
        </h4>
        <div className='flex flex-col space-y-2 w-full'>
          {services.map((service) => {
            return (
              <Link key={service.title} href={`/programs${service.path}`}>
                <div className='bg-brand-accent w-full hover:bg-primary1 py-2 text-white hover:bg-opacity-50 pl-10'>
                  <ul className='list-disc'>
                    <li>{service.title}</li>
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* RECENT POSTS */}
      <RecentPosts />
    </section>
  );
};

export default SidePanel;
