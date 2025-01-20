/** @format */
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`text-gray-600 font-bold ${
        pathName === item.path &&
        'text-light-bg-green bg-brand-accent lg:bg-secondary-light-blue rounded-md px-2 py-1 flex items-center'
      }`}
    >
      {item.title}{' '}
    </Link>
  );
};

export default NavLink;
