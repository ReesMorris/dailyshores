import { Tasks } from '@/features/tasks/components';
import { sections } from '@/data';
import { styles } from './home.styles';

export const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      {sections().map(section => (
        <Tasks.Section
          key={section.id}
          id={section.id}
          title={section.title}
          timeLeft={new Date(section.refresh).toISOString()}
          profit={section.profit}
        >
          {section.tasks.map(task => (
            <Tasks.Item
              key={task.id}
              title={task.title}
              reward={task.reward}
              descriptionText={task.descriptionText}
              descriptionLink={task.descriptionLink}
            />
          ))}
        </Tasks.Section>
      ))}
    </div>
  );
};
