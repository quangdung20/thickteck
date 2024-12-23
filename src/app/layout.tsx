import * as React from 'react';
import Footer from '@/client-components/Footer/Footer';
import Navbar from '@/client-components/Navbar/index';

import '@/styles/globals-client.css';

export const metadata = {
  title: 'ThickTech',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
