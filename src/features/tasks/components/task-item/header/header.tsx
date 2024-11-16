import { InfoIcon } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { TaskItemProps } from '../task-item';
import { Checkbox } from './checkbox';
import { styles } from './header.styles';

interface HeaderProps {
  titleId: string;
  detailsButtonId: string;
  descriptionId: string;
  title: TaskItemProps['title'];
  reward: TaskItemProps['reward'];
  isCompleted: boolean;
  isExpanded: boolean;
  hasDescription: boolean;
  onToggleCompleted: () => void;
  onToggleDetails: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  titleId,
  detailsButtonId,
  descriptionId,
  reward,
  isCompleted,
  isExpanded,
  hasDescription,
  onToggleCompleted,
  onToggleDetails
}) => {
  return (
    <div className={styles.header}>
      <button
        type='button'
        className={cn(styles.left, styles.item)}
        aria-pressed={isCompleted}
        aria-label={`Mark ${title} as ${isCompleted ? 'incomplete' : 'complete'}`}
        onClick={onToggleCompleted}
      >
        <div className={styles.leftInner}>
          <Checkbox
            checked={isCompleted}
            aria-label={`Task status: ${isCompleted ? 'completed' : 'not completed'}`}
          />
          <h3
            id={titleId}
            className={styles.title}
            data-completed={isCompleted || undefined}
          >
            {title}
          </h3>
        </div>

        {reward && (
          <div
            role='status'
            aria-label={`Reward: ${reward}`}
            className={styles.rewardSummary}
          >
            {reward}
          </div>
        )}
      </button>

      {hasDescription && (
        <button
          id={detailsButtonId}
          type='button'
          className={cn(styles.right, styles.item)}
          aria-expanded={isExpanded}
          aria-controls={descriptionId}
          aria-label={`${isExpanded ? 'Hide' : 'Show'} details for ${title}`}
          onClick={onToggleDetails}
        >
          <InfoIcon
            className={styles.infoIcon}
            aria-hidden='true'
            role='presentation'
          />
        </button>
      )}
    </div>
  );
};
