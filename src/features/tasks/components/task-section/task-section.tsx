import type { Section } from '@/types';
import { styles } from './task-section.styles';
import { Countdown } from './countdown';
import { Controls } from './controls';
import { Profit } from './profit';
import { TaskSectionProvider } from './provider';

interface TaskSectionProps {
  section: Section;
  showControls?: boolean;
  children: React.ReactNode;
}

export const TaskSection: React.FC<TaskSectionProps> = ({
  section,
  showControls = false,
  children
}) => {
  const { id, title, endTime, profit } = section;

  return (
    <TaskSectionProvider section={section}>
      <section id={id} aria-labelledby={id} className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            <h2 id={id} className={styles.title}>
              {title}
            </h2>
            {profit && <Profit profit={profit} />}
          </div>
          {showControls && <Controls />}
        </div>
        {endTime && <Countdown endTime={endTime} />}
        <ul className={styles.list}>{children}</ul>
      </section>
    </TaskSectionProvider>
  );
};
