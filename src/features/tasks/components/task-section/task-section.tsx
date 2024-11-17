import { styles } from './task-section.styles';
import { Countdown } from './countdown';
import { Controls } from './controls';
import { Profit } from './profit';

interface TaskSectionProps {
  id: string;
  title: string;
  endTime?: Date;
  profit?: string | number;
  showControls?: boolean;
  children: React.ReactNode;
}

export const TaskSection: React.FC<TaskSectionProps> = ({
  id,
  title,
  endTime,
  profit,
  showControls = false,
  children
}) => {
  return (
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
  );
};
