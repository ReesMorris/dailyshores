/* eslint-disable @next/next/no-head-element */

import type { Metadata } from 'next';
import type { LayoutComponent } from '@/types';
import { Plausible } from '@/components/global/plausible';
import { Header } from '@/components/global/header';
import { Wrapper } from '@/components/global/wrapper';
import '@/theme/globals.css';
import { TimeProvider } from '@/providers/time-provider';
import { TabProvider } from '@/providers/tab-provider';

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
      <body>
        <TabProvider>
          <TimeProvider>
            <Header />
            <Wrapper>{children}</Wrapper>
          </TimeProvider>
        </TabProvider>
      </body>
    </html>
  );
};
