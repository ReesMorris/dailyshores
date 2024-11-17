import { ArrowUpDown, Clock, RotateCcw } from 'lucide-react';
import { IconButton } from '@/components/ui/buttons';
import { Badge } from '@/components/ui/badge';
import { styles } from './task-section.styles';

interface TaskSectionProps {
  id: string;
  title: string;
  timeLeft?: string;
  profit?: string | number;
  showControls?: boolean;
  children: React.ReactNode;
}

export const TaskSection: React.FC<TaskSectionProps> = ({
  id,
  title,
  timeLeft,
  profit,
  showControls = true,
  children
}) => {
  const titleId = `task-section-${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          {timeLeft && (
            <Badge icon={<Clock />} variant='blue'>
              {timeLeft}
            </Badge>
          )}
          {profit && (
            <div className={styles.profit}>Total Profit: {profit}</div>
          )}
        </div>
        {showControls && (
          <div
            role='toolbar'
            aria-label='Task list controls'
            className={styles.controls}
          >
            <IconButton
              icon={<RotateCcw />}
              aria-label='Refresh'
              title='Refresh'
            />
            <IconButton icon={<ArrowUpDown />} aria-label='Sort' title='Sort' />
          </div>
        )}
      </div>
      <ul className={styles.list}>{children}</ul>
    </section>
  );
};
