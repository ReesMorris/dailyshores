'use client';

import { useTaskItem } from '../provider';
import { styles } from './completed-toggle.styles';
import { Checkbox } from './checkbox';

export const CompletedToggle: React.FC = () => {
  const { ids, task, isCompleted, setIsCompleted } = useTaskItem();

  /**
   * Toggle the task's completion status.
   */
  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <button
      type='button'
      className={styles.container}
      aria-pressed={isCompleted}
      aria-label={`Mark ${task.title} as ${isCompleted ? 'incomplete' : 'complete'}`}
      onClick={handleClick}
    >
      <div className={styles.leftInner}>
        <Checkbox checked={isCompleted} />
        <h3
          id={ids.titleId}
          className={styles.title}
          data-completed={isCompleted || undefined}
        >
          {task.title}
        </h3>
      </div>

      {task.reward && (
        <div
          role='status'
          aria-label='Reward'
          className={styles.reward}
          data-completed={isCompleted || undefined}
        >
          {task.reward}
        </div>
      )}
    </button>
  );
};
