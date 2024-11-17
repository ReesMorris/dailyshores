'use client';

import { ClockIcon } from 'lucide-react';
import { useCountdown } from '@/hooks';
import { styles } from './countdown.styles';

interface CountdownProps {
  endTime: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ endTime }) => {
  const countdown = useCountdown(endTime);
  const label = `Refreshes at ${endTime.toLocaleTimeString()} on ${endTime.toLocaleDateString()}`;

  return (
    <div className={styles.container} aria-label={label}>
      <ClockIcon
        className={styles.icon}
        aria-hidden='true'
        role='presentation'
      />
      <span aria-hidden title={label}>
        {countdown}
      </span>
    </div>
  );
};
