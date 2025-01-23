/** @format */
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './nav-link/navLink';
import Hamburger from 'hamburger-react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';

const handleLogOut = async (e) => {};
const NavLinks = ({ session }) => {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    {
      title: 'Programs',
      path: '#',
      dropdown: [
        {
          title: 'Socio-Economic Security',
          path: '/programs/socio-economic-security',
        },
        { title: 'Environment', path: '/programs/environment' },
        {
          title: 'Education & Vocational Skills',
          path: '/programs/education-and-vocational-skills',
        },
        { title: 'Care & Support', path: '/programs/care-and-support' },
      ],
    },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'Gallery', path: '/gallery' },
  ];

  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* desktop_links */}
      <div className='hidden lg:flex desktop_links space-x-10 font-medium'>
        {links.map((link) => {
          if (link.dropdown) {
            return (
              <div key={link.title} className='relative group'>
                <NavLink item={link} /> <FaChevronDown className='inline' />
                <div className='absolute hidden lg:group-hover:flex flex-col bg-white rounded-md w-max shadow-md mt-2 overflow-hidden'>
                  {link.dropdown.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.title}
                      href={dropdownLink.path}
                      className='px-4 py-2 border-b-2 hover:bg-gray-100'
                    >
                      {dropdownLink.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          return <NavLink key={link.title} item={link} />;
        })}
      </div>

      {/* mobile-links */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className='flex items-center lg:hidden'
      >
        <Hamburger />
      </button>
      {open && (
        <div className='mobile_links absolute font-bold bg-white left-0 flex flex-col items-center lg:hidden justify-center overflow-hidden z-50'>
          <Link className='mobile-nav-logo' href='/'>
            <Image
              width={60}
              height={60}
              className='h-auto'
              src='/logo-resized.png'
              alt='logo'
            />
          </Link>
          {links.map((link) => (
            <div key={link.title}>
              <div
                className={`text-gray-600 font-bold flex items-center justify-between px-4 py-2 cursor-pointer ${
                  activeDropdown === link.title
                    ? 'bg-brand-accent text-white'
                    : ''
                }`}
                onClick={() => {
                  if (link.dropdown) {
                    toggleDropdown(link.title);
                  }
                }}
              >
                {link.dropdown ? (
                  <>
                    {link.title}
                    <FaChevronDown
                      className={`ml-2 transform ${
                        activeDropdown === link.title ? 'rotate-180' : ''
                      }`}
                    />
                  </>
                ) : (
                  <Link href={link.path}>{link.title}</Link>
                )}
              </div>
              {link.dropdown && activeDropdown === link.title && (
                <div className='bg-slate-100 overflow-hidden rounded-md px-4 py-2'>
                  {link.dropdown.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.title}
                      href={dropdownLink.path}
                      className='block text-slate-500 px-4 py-2 border-b-2 last:border-0'
                    >
                      {dropdownLink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavLinks;
