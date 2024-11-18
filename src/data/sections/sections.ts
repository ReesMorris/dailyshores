import type { Section } from '@/types';

export const sections: Section[] = [
  {
    id: 'dailies',
    title: 'Dailies',
    endTime: new Date(new Date().setUTCHours(24, 0, 0, 0)),
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
    endTime: new Date(
      new Date().setUTCHours(
        24 * ((7 - new Date().getUTCDay() + 1) % 7 || 7),
        0,
        0,
        0
      )
    ),
    profit: undefined,
    tasks: []
  },

  {
    id: 'monthlies',
    title: 'Monthlies',
    endTime: new Date(
      new Date(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth() + 1,
        1
      ).getTime()
    ),
    profit: undefined,
    tasks: []
  }
];
