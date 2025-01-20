/** @format */

'use client';
import { Zoom } from 'react-slideshow-image';
import Image from 'next/image';
import Link from 'next/link';
import { FaShare } from 'react-icons/fa';
import Loader from '../page-loader/Pageloader';

const Carousel = () => {
  // handle share
  const handleShare = async (title, url) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        console.log('Content shared successfully!');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      alert('Sharing is not supported in your browser.');
    }
  };

  const heroData = [
    {
      id: '1',
      img_url: '/home-based-gardens-resized.jpg',
      title: `Socio-Economic Security`,
      desc: `Empowering individuals and communities to achieve financial independence through sustainable income-generating activities, micro-financing, and financial literacy programs.`,
      link: '/programs/socio-economic-security',
    },
    {
      id: '2',
      img_url: '/reusable-pads-resized.jpg',
      title: `Care & Support`,
      desc: `Providing emotional, physical, and material assistance to vulnerable groups, including orphans, the elderly, and individuals affected by illness or hardship.`,
      link: '/programs/care-and-support',
    },
    {
      id: '3',
      img_url: '/class-on-menstraul-hygiene-resized.jpg',
      title: `Education & Vocational Skills`,
      desc: `Enhancing access to quality education by offering scholarships, scholastic materials, and teacher training, ensuring every child has the opportunity to learn and thrive.`,
      link: '/programs/education-and-vocational-skills',
    },
  ];

  return (
    <div className='relative -top-32'>
      <Zoom
        scale={0.4}
        transitionDuration={300}
        pauseOnHover={false}
        easing='cubic'
      >
        {heroData.length > 0 ? (
          heroData.map(({ id, title, desc, link, img_url }, index) => (
            <div key={id || index} className='each-slide'>
              <article className='space-y-8'>
                <h2 className='tracking-tight'>{title}</h2>
                <p className='text-white text-center'>{desc}</p>
                <div className='flex flex-col lg:flex-row gap-3 items-center justify-center w-full font-bold text-white carousel-action-btns'>
                  <Link
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center py-4 px-8 text-brand-secondary bg-brand-accent rounded-full hover:bg-opacity-50'
                  >
                    <button>READ MORE</button>
                  </Link>
                  <button
                    onClick={() => handleShare(title, link)}
                    className='flex items-center py-4 px-8 border-2 rounded-full hover:bg-brand-accent hover:bg-opacity-50'
                  >
                    <span className='flex items-center hover:p-1 hover:rounded-md gap-2'>
                      SHARE <FaShare className='inline-block' />
                    </span>
                  </button>
                </div>
              </article>
              {img_url && (
                <div>
                  <Image
                    className='hero-image object-cover'
                    src={img_url}
                    fill
                    alt={title}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='col-span-3 flex flex-col items-center justify-center w-full'>
            <Loader />
          </div>
        )}
      </Zoom>
    </div>
  );
};

export default Carousel;
