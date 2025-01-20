/** @format */

import { inter } from './font/font';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Partners from '@/components/partners/Partners';

export const metadata = {
  title: {
    default: 'Kasale Foundation | Home',
    template: '%s | Kasale Foundation',
  },
  description:
    'Multimedia company with a mission to empower institutions, businesses, and organizations through a wide range of services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Partners />
        <Footer />
      </body>
    </html>
  );
}
