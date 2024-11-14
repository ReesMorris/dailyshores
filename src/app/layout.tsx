import type { Metadata } from 'next';
import { Plausible } from '@/components/global/plausible';
import '@/theme/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <Plausible />
      </head>
      <body>{children}</body>
    </html>
  );
}
