/** @format */

import PostCard from '@/components/post-card/PostCard';

const BlogPage = () => {
  return (
    <div className=''>
      <section className='page'>
        <div className='w-11/12 lg:w-9/12 text-white mx-auto'>
          <h2 className='pb-4'>Our Blog</h2>
          <p>
            Stay connected about our operations by checking our blog articles.
          </p>
        </div>
      </section>
      <section className='grid grid-cols-1 gap-4 lg:grid-cols-4 w-11/12 lg:w-9/12 mx-auto mb-24'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </div>
  );
};

export default BlogPage;
