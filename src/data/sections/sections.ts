import type { Section } from '@/types';
import { getDailyEndTime, getMonthlyEndTime, getWeeklyEndTime } from './utils';

export const sections = (): Section[] => [
  {
    id: 'dailies',
    title: 'Dailies',
    endTime: getDailyEndTime(),
    profit: undefined,
    tasks: [
      {
        id: 'daily-ventures',
        title: 'Ventures',
        reward: 'Passive XP',
        descriptionText: undefined,
        descriptionLink: 'https://brightershoreswiki.org/w/Ventures'
      }
    ]
  },

  {
    id: 'weeklies',
    title: 'Weeklies',
    endTime: getWeeklyEndTime(),
    profit: undefined,
    tasks: []
  },

  {
    id: 'monthlies',
    title: 'Monthlies',
    endTime: getMonthlyEndTime(),
    profit: undefined,
    tasks: []
  }
];
