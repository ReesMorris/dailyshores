'use client';

import { ExternalLinkIcon } from 'lucide-react';
import { Link } from '@/components/common/link';
import { useTaskItem } from '../provider';
import { styles } from './external-link.styles';

export const ExternalLink: React.FC = () => {
  const { task } = useTaskItem();

  // If there is no description link, don't render this section
  if (!task.descriptionLink) {
    return null;
  }

  return (
    <Link href={task.descriptionLink} className={styles.container}>
      <ExternalLinkIcon
        className={styles.icon}
        aria-hidden='true'
        role='presentation'
      />
    </Link>
  );
};
