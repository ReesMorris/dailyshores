import type { NavigationItem } from '@/types';

export const primaryNavigation: NavigationItem[] = [
  {
    id: 'dailies',
    title: 'Dailies',
    url: '#dailies'
  },
  {
    id: 'weeklies',
    title: 'Weeklies',
    url: '#weeklies'
  },
  {
    id: 'monthlies',
    title: 'Monthlies',
    url: '#monthlies'
  }
] as const;
