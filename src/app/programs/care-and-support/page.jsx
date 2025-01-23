/** @format */

import React from 'react';
import SidePanel from '@/components/side-panel/SidePanel';
import Image from 'next/image';
import Link from 'next/link';
import DonationCTA from '@/components/donation-cta/DonationCTA';

const CareAndSupport = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url('/reusable-pads-resized.jpg')`,
        }}
        className='page dark-overlay'
      >
        <div className='w-11/12 lg:w-9/12 text-white mx-auto z-10'>
          <h2 className='pb-4'>Care And Support</h2>
          <p>
            Providing essential care and support to vulnerable individuals and
            marginalized groups.
          </p>
        </div>
      </section>
      <section className='w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-12'>
        <section className='right-side w-full mx-auto lg:mx-0 lg:w-8/12'>
          <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-start'>
              <div className='lg:h-96'>
                <Image
                  src='/feeding.jpg'
                  className='w-full object-cover lg:h-96'
                  width={1000}
                  height={1000}
                  alt='img'
                />
              </div>
              <div className='lg:h-96'>
                <Image
                  src='/support.jpg'
                  className='w-full object-cover lg:h-96'
                  width={1000}
                  height={1000}
                  alt='img'
                />
              </div>
            </div>
            <h4 className='py-4 text-3xl lg:text-4xl font-bold'>Health</h4>
            <p className=''>
              Health Empowering Girls, Enhancing Dignity: Kasale Foundation's
              Menstrual Hygiene Project In rural Uganda, where poverty and
              limited access to resources are a harsh reality, the menstrual
              health and hygiene of young girls are often compromised, Kasale
              Foundation recognised this critical issue and launched an
              innovative Menstrual Hygiene Project aimed at providing girls with
              dignified and sustainable solutions for managing their
              menstruation. The project began with the distribution of sanitary
              pads to girls in need. However, we soon realised that this was
              only a temporary solution and address this, with help of the
              funders, we introduced a groundbreaking initiative , providing
              sewing machines and training for girls to produce reusable
              sanitary pads.
            </p>
            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              KEY ACTIVITIES:
            </h4>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>
                Provision of essential supplies such as food, clothing, and
                healthcare.
              </li>
              <li className=''>
                Counseling and psychosocial support services.
              </li>
              <li className=''>
                Advocacy for the rights and dignity of vulnerable groups.
              </li>
              <li className=''>
                Community-based care for the elderly and disabled.
              </li>
            </ul>
            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              IMPACT
            </h4>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>Reduce absenteeism.</li>
              <li className=''>Promote Dignity and confidence</li>
              <li className=''>Foster economic Empowerment</li>
              <li className=''>
                Break stigma; normalise conversations around menstruation,
                breaking the stigma and taboo surrounding this natural process.
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

export default CareAndSupport;
