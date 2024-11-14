import type { Metadata } from 'next';
import { Plausible } from '@/components/global/plausible';
import '@/theme/globals.css';

export const metadata: Metadata = {
  title: 'DailyShores',
  description:
    'A curated list of dailies, weeklies, and monthlies for Brighter Shores.'
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
