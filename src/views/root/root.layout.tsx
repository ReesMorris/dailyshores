/* eslint-disable @next/next/no-head-element */

import type { Metadata } from 'next';
import type { LayoutComponent } from '@/types';
import { Plausible } from '@/components/global/plausible';
import '@/theme/globals.css';

export const metadata: Metadata = {
  title: 'DailyShores',
  description:
    'A curated list of dailies, weeklies, and monthlies for Brighter Shores.'
};

export const Layout: LayoutComponent = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <Plausible />
      </head>
      <body>{children}</body>
    </html>
  );
};
