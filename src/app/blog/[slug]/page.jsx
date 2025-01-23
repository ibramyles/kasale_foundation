/** @format */

import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import RecentPosts from '@/components/recent-posts/RecentPosts';

const SinglePostPage = () => {
  return (
    <div>
      <section className='page'>
        <div className='w-11/12 lg:w-9/12 text-white mx-auto'>
          <h2 className='pb-4'>Post Title</h2>
          <Link href='/blog'>
            <button className='bg-light-bg-gray p-2 text-brand-accent rounded-md'>
              <FaChevronLeft className='inline mr-1' /> Back to Blog
            </button>
          </Link>
        </div>
      </section>
      <section className='post w-11/12 grid grid-cols-1 lg:grid-cols-4 lg:gap-8 space-y-8 lg:space-y-0 lg:w-9/12 mx-auto mb-24'>
        <section className='left-post-section grid grid-cols-1 gap-8 lg:grid-cols-2 col-span-3'>
          <div className='post-image'>
            <Image
              width='400'
              height='400'
              src='/cabbage.jpg'
              alt='Post Image'
              className='w-full h-80 object-cover'
            />
          </div>

          <div className='post-info'>
            <h3 className='font-bold mb-2'>By: Author Name</h3>
            <p className='text-gray-600 mb-4'>Posted on January 1, 2022</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              repellendus facilis eaque ipsum, ex perferendis mollitia culpa
              quaerat numquam cumque maiores libero distinctio cupiditate quae
              odit pariatur nobis dolorum delectus.
            </p>
          </div>
        </section>
        <section className='right-post-section'>
          <RecentPosts />
        </section>
      </section>
    </div>
  );
};

export default SinglePostPage;
