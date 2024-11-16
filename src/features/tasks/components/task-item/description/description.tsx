import type { TaskItemProps } from '../task-item';
import { styles } from './description.styles';

interface DescriptionProps {
  description: TaskItemProps['description'];
  descriptionId: string;
  labelledBy: string;
}

export const Description: React.FC<DescriptionProps> = ({
  description,
  descriptionId,
  labelledBy
}) => {
  return (
    <section
      id={descriptionId}
      className={styles.description}
      aria-labelledby={labelledBy}
    >
      {description}
    </section>
  );
};
