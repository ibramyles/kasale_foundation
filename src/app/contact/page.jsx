/** @format */
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us',
  description: 'The bulb magazine is located in Iganga district Uganda.',
};
const ContactPage = () => {
  return (
    <div className='contact-page'>
      {/* section-1 */}
      <div className='page'>
        <div className='w-11/12 lg:w-9/12 text-white mx-auto '>
          <h2 className='pb-5'>Get In Touch</h2>
          <p>
            Want to get in touch? We would love to hear from you. <br /> Please
            reach out...
          </p>
        </div>
      </div>
      {/*  section 2 */}
      <div className='w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-10'>
        <div className='min-h-72 text-center space-y-10 rounded-md bg-light-bg-gray p-5 lg:p-10 text-dark-blue drop-shadow-xl'>
          <p className='flex flex-col items-center'>
            <span>
              <FaEnvelope className='text-brand-accent mb-1 text-3xl' />
            </span>
            <span>info@kasalefoundation.org</span>
          </p>
          <p className='flex flex-col items-center'>
            <span>
              <FaPhone className='text-brand-accent mb-1 text-3xl' />
            </span>
            <span>+256705811874 | +256772914636</span>
          </p>
          <p className='flex flex-col items-center'>
            <span>
              <FaLocationArrow className='text-brand-accent mb-1 text-3xl' />
            </span>
            <span>Iganga Municipality, Uganda.</span>
          </p>
        </div>
        <div className='bg-light-bg-gray rounded-md flex flex-col justify-center text-center space-y-8 py-8 drop-shadow-xl'>
          <p className='text-brand-secondary font-bold text-lg'>
            Connect With Us ?{' '}
          </p>
          <ul className='mobile-footer-socials w-11/12 bg-white lg:w-6/12 flex justify-between py-2 px-4 rounded-xl mx-auto text-2xl text-brand-accent'>
            <li>
              <Link
                href='https://www.facebook.com/groups/1488544788301068'
                target='_blank'
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/groups/1488544788301068'
                target='_blank'
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/groups/1488544788301068'
                target='_blank'
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/groups/1488544788301068'
                target='_blank'
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/groups/1488544788301068'
                target='_blank'
              >
                <FaTiktok />
              </Link>
            </li>
          </ul>
          <span className='block text-sm text-secondary-light-blue'>
            @kasalefoundation
          </span>
        </div>
      </div>
      <div className='map-contactform w-11/12 mt-16 grid-cols-1 lg:w-4/12 mx-auto'>
        <div className='contact-form'>
          <h2 className='text-3xl font-bold pb-8 text-center text-brand-accent'>
            SEND US A MESSAGE
          </h2>
          <form className='form-styles' action=''>
            <input type='email' placeholder='Email' name='username' />
            <textarea
              className='px-6 py-3 h-44 rounded-md focus:outline-none'
              placeholder='Your Message'
            ></textarea>
            <button className='form-button'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
