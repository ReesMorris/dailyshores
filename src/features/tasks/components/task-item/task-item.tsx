'use client';

import { useIsMounted } from '@/hooks';
import type { SectionTask } from '@/types';
import { styles } from './task-item.styles';
import { Description } from './description';
import { CompletedToggle } from './completed-toggle';
import { DescriptionToggle } from './description-toggle';
import { ExternalLink } from './external-link';
import { TaskItemProvider } from './provider';

export interface TaskItemProps {
  task: SectionTask;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const isMounted = useIsMounted();

  return (
    <TaskItemProvider task={task}>
      {({ ids, isCompleted }) => {
        return (
          <li className={styles.item}>
            {isMounted && (
              <article
                className={styles.container}
                aria-labelledby={ids.titleId}
                data-completed={isCompleted || undefined}
              >
                <div className={styles.row}>
                  <CompletedToggle />
                  <DescriptionToggle />
                  <ExternalLink />
                </div>
                <Description />
              </article>
            )}
          </li>
        );
      }}
    </TaskItemProvider>
  );
};
