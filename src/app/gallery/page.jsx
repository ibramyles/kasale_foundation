/** @format */
'use client';

import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image from 'next/image';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(12);

  // Array of image URLs
  const images = [
    {
      original: '/care3.jpg',
      thumbnail: '/care3.jpg',
    },
    {
      original: '/care3.jpg',
      thumbnail: '/care3.jpg',
    },
    {
      original: '/care3.jpg',
      thumbnail: '/care3.jpg',
    },
  ];

  return (
    <div>
      <section className='page'>
        <div className='w-11/12 lg:w-9/12 text-white mx-auto'>
          <h2 className='pb-4 text-2xl font-bold'>Our Gallery</h2>
          <p>
            View our gallery of beautiful photos of our children, our mission,
            and our vision.
          </p>
        </div>
      </section>
      <ImageGallery items={images} />;
    </div>
  );
};

export default GalleryPage;
