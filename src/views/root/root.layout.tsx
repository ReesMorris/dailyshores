/* eslint-disable @next/next/no-head-element */

import type { Metadata } from 'next';
import type { LayoutComponent } from '@/types';
import { Plausible } from '@/components/global/plausible';
import { Header } from '@/components/global/header';
import { Wrapper } from '@/components/global/wrapper';
import '@/theme/globals.css';
import { TimeProvider } from '@/providers/time-provider';
import { TabProvider } from '@/providers/tab-provider';
import { Footer } from '@/components/global/footer';
import { styles } from './root.styles';

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
            <Wrapper className={styles.wrapper}>
              <main>{children}</main>
              <Footer />
            </Wrapper>
          </TimeProvider>
        </TabProvider>
      </body>
    </html>
  );
};
