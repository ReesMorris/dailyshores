'use client';

import { useTaskItem } from '../provider';
import { styles } from './description.styles';

export const Description: React.FC = () => {
  const { ids, task, showDetails } = useTaskItem();

  // If there is no description text or the details are hidden, do not render
  if (!task.description || !showDetails) {
    return null;
  }

  return (
    <section
      id={ids.descriptionId}
      className={styles.description}
      aria-labelledby={ids.titleId}
    >
      {task.description}
    </section>
  );
};
