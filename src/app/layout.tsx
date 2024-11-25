import * as React from 'react';

import '@/styles/globals-client.css';

export const metadata = {
  title: 'ThickTech',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
