/** @format */

import React from 'react';
import SidePanel from '@/components/side-panel/SidePanel';
import Image from 'next/image';
import Link from 'next/link';
import DonationCTA from '@/components/donation-cta/DonationCTA';

const SocioEconomicSecurity = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url('/re-usable-sanitary-pads.jpg')`,
        }}
        className='page dark-overlay'
      >
        <div className='w-11/12 lg:w-9/12 text-white mx-auto z-10'>
          <h2 className='pb-4'>Socio-Econonmic Security</h2>
          <p>
            Empowering communities through sustainable livelihoods and financial
            independence initiatives.
          </p>
        </div>
      </section>
      <section className='w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-12'>
        <section className='right-side w-full mx-auto lg:mx-0 lg:w-8/12'>
          <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-start'>
              <div className='lg:h-96'>
                <Image
                  src='/nakalama.jpg'
                  className='w-full object-cover lg:h-96'
                  width={1000}
                  height={1000}
                  alt='img'
                />
              </div>
              <div className='lg:h-96'>
                <Image
                  src='/garden-4.jpg'
                  className='w-full object-cover lg:h-96'
                  width={1000}
                  height={1000}
                  alt='img'
                />
              </div>
            </div>
            <h4 className='py-4 text-3xl lg:text-4xl font-bold'>
              Socio-Economic Activity
            </h4>
            <p className=''>
              Our Socio-Economic Security program is designed to empower
              communities with the tools and resources needed to achieve
              financial independence. By addressing poverty and fostering
              economic resilience, we aim to uplift marginalized groups and
              create lasting change.
            </p>
            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              KEY ACTIVITIES:
            </h4>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>
                Micro-financing initiatives for small businesses.
              </li>
              <li className=''>
                Financial literacy training for individuals and groups.
              </li>
              <li className=''>
                Support for women-led enterprises and cooperatives.
              </li>
              <li className=''>
                Facilitating access to markets for local products.
              </li>
            </ul>
            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              Community Engagement
            </h4>
            <p>
              Empowering Differently Abled Children: Kasale Foundation's
              Home-Based Garden Project In an era where inclusivity and
              accessibility are vital, Kasale Foundation is championing a
              groundbreaking initiative to empower children with disabilities
              through our Home-Based Garden Project. This innovative program
              provides these remarkable young individuals with:
            </p>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>
                Opportunities for physical activity and sensory stimulation.
              </li>
              <li className=''>
                A sense of pride, ownership, and accomplishment.
              </li>
              <li>
                Essential life skills such as problem-solving, communication,
                and self-care.
              </li>
            </ul>
          </div>
        </section>
        <SidePanel />
      </section>
      <DonationCTA />
    </div>
  );
};

export default SocioEconomicSecurity;
