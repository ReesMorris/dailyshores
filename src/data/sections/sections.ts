import type { Section } from '@/types';

export const sections = (): Section[] => {
  return [
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
          descriptionText: 'Complete ventures to earn passive XP.',
          descriptionLink: 'https://brightershoreswiki.org/w/Ventures'
        }
      ]
    },

    {
      id: 'weeklies',
      title: 'Weeklies',
      // For Monday:    (8 - getUTCDay()) % 7
      // For Tuesday:   (9 - getUTCDay()) % 7
      // For Wednesday: (10 - getUTCDay()) % 7
      // For Thursday:  (11 - getUTCDay()) % 7
      // For Friday:    (12 - getUTCDay()) % 7
      // For Saturday:  (13 - getUTCDay()) % 7
      // For Sunday:    (14 - getUTCDay()) % 7
      endTime: new Date(
        new Date().setUTCHours(24 * ((8 - new Date().getUTCDay()) % 7), 0, 0, 0)
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
};
