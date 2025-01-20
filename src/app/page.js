/** @format */
'use client';
import { useState } from 'react';
import Carousel from '@/components/carousel/Carousel';
import IntroSection from '@/components/intro-section/IntroSection';
import Popup from '@/components/pop-up/Popup';
import Image from 'next/image';
import WhatWeDo from '@/components/what-we-do/WhatWeDo';
import CTA from '@/components/cta/CTA';
import Partners from '@/components/partners/Partners';

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main>
      <Popup isVisible={showPopup} onClose={() => setShowPopup(false)} />
      <Carousel />
      <IntroSection />
      <WhatWeDo />
      <CTA />
    </main>
  );
}
