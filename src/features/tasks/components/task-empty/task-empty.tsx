import { styles } from './task-empty.styles';

export const TaskEmpty: React.FC = () => {
  return (
    <div className={styles.container}>
      No tasks! Rejoyce in the lack of grind.
    </div>
  );
};
