import 'server-only';

import { Tasks } from '@/features/tasks/components';
import { sections } from '@/data';
import { styles } from './home.styles';

export const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      {sections().map(section => (
        <Tasks.Section key={section.id} section={section} />
      ))}
    </div>
  );
};
