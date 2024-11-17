import { InfoIcon } from 'lucide-react';
import { useTaskItem } from '../provider';
import { styles } from './description-toggle.styles';

export const DescriptionToggle: React.FC = () => {
  const { ids, task, showDetails, setShowDetails } = useTaskItem();

  /**
   * Toggles the visibility of the task description
   */
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  // If the task has no description text, don't render the toggle
  if (!task.descriptionText) {
    return null;
  }

  return (
    <button
      id={ids.detailsButtonId}
      type='button'
      className={styles.container}
      aria-expanded={showDetails}
      aria-controls={ids.descriptionId}
      aria-label={`${showDetails ? 'Hide' : 'Show'} details for ${task.title}`}
      onClick={handleClick}
    >
      <InfoIcon
        className={styles.icon}
        aria-hidden='true'
        role='presentation'
      />
    </button>
  );
};
