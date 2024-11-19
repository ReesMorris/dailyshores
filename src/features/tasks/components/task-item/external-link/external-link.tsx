'use client';

import { ExternalLinkIcon } from 'lucide-react';
import { Link } from '@/components/common/link';
import { useTaskItem } from '../provider';
import { styles } from './external-link.styles';

export const ExternalLink: React.FC = () => {
  const { task, isCompleted } = useTaskItem();

  // If there is no description link, don't render this section
  if (!task.link) {
    return null;
  }

  return (
    <Link
      href={task.link.url}
      title={task.link.text}
      className={styles.container}
      data-completed={isCompleted || undefined}
    >
      <ExternalLinkIcon
        className={styles.icon}
        aria-hidden='true'
        role='presentation'
      />
    </Link>
  );
};
