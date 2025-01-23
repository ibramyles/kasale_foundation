/** @format */

import React from 'react';
import SidePanel from '@/components/side-panel/SidePanel';
import Image from 'next/image';
import Link from 'next/link';
import DonationCTA from '@/components/donation-cta/DonationCTA';

const EducationAndVocationalSkills = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url('/class-on-menstraul-hygiene-resized.jpg')`,
        }}
        className='page dark-overlay'
      >
        <div className='w-11/12 lg:w-9/12 text-white mx-auto z-10'>
          <h2 className='pb-4'>Education & Vocational Skills</h2>
          <p className=''>
            Equipping individuals with education & practical skills in areas
            like tailoring, carpentry, and ICT to foster self-reliance and
            create employment opportunities.
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
                  src='/scholastic materials.jpg'
                  className='w-full object-cover lg:h-96'
                  width={1000}
                  height={1000}
                  alt='img'
                />
              </div>
            </div>
            <h4 className='py-4 text-3xl lg:text-4xl font-bold'>
              Education & Vocational Skills Training
            </h4>
            <p className=''>
              At Kasale Foundation, we recognize education as a powerful tool
              for transformation and believe that practical skills are essential
              for self-reliance. This combined program enhances access to
              quality education and equips individuals with vocational skills,
              ensuring that communities are empowered to thrive academically and
              economically.
            </p>
            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              KEY ACTIVITIES:
            </h4>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>
                Scholarships and sponsorships for disadvantaged students.
              </li>
              <li className=''>
                Distribution of scholastic materials like books and uniforms.
              </li>
              <li className=''>
                Teacher training and capacity-building workshops.
              </li>
              <li className=''>
                Career guidance and job placement assistance.
              </li>
              <li className=''>
                Provision of tools and startup kits for trainees to launch their
                own ventures.
              </li>
            </ul>

            <h4 className='font-bold text-brand-accent text-lg pt-12 pb-3'>
              School Garden Project
            </h4>
            <p>
              Promoting Food Security, Sustainability, and Experiential Learning
              In July 2024, Kasale Foundation partnered with Nakalama Primary
              School, a remote rural government school in Uganda, to launch the
              School Garden Project. This initiative integrates gardening and
              agricultural skills into the school curriculum, serving as an
              outdoor classroom to teach science, nutrition, and environmental
              sustainability.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Image
                width={500}
                height={200}
                src='/school-garden-6.jpg'
                className='w-80 py-4 object-cover'
                alt='school-garden'
              />
              <Image
                width={500}
                height={200}
                src='/school-garden-2.jpg'
                className='w-80 py-4 object-cover'
                alt='school-garden'
              />
            </div>

            <ul className='list-disc list-inside space-y-3'>
              <li className=''>
                Students gain essential life skills and develop healthy eating
                habits.
              </li>
              <li className=''>
                A training manual enhances practical learning and sustainability
                efforts.
              </li>
              <li>
                Essential life skills such as problem-solving, communication,
                and self-care.
              </li>
            </ul>
            <h4 className='pb-4 text-brand-accent mt-8'>Imapct</h4>
            <ul className='list-disc list-inside space-y-3'>
              <li className=''>
                Enhanced sustainability and self-sufficiency through innovative
                initiatives like the School Garden Project.
              </li>
              <li className=''>
                Improved literacy and access to education for underserved
                communities.
              </li>
              <li>
                Greater employability and self-reliance through practical
                skill-building.
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

export default EducationAndVocationalSkills;
