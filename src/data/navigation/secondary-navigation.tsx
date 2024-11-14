import { faDiscord, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LucideBookText, LucideMap } from 'lucide-react';
import type { SecondaryNavigation } from '@/types';

export const secondaryNavigation: SecondaryNavigation = [
  {
    id: '1',
    title: 'Tools',
    items: [
      {
        id: 'brighterfinder',
        title: 'Interactive Map',
        url: 'https://brighterfinder.com',
        icon: <LucideMap />
      }
    ]
  },
  {
    id: '2',
    title: 'Community',
    items: [
      {
        id: 'bs-wiki',
        title: 'Official Wiki',
        url: 'https://brightershoreswiki.org',
        icon: <LucideBookText />
      },
      {
        id: 'bs-discord',
        title: 'Official Discord',
        url: 'https://discord.gg/brightershores',
        icon: <FontAwesomeIcon icon={faDiscord} />
      },
      {
        id: 'bs-reddit',
        title: 'Official Subreddit',
        url: 'https://www.reddit.com/r/brightershores/',
        icon: <FontAwesomeIcon icon={faRedditAlien} />
      }
    ]
  }
] as const;
