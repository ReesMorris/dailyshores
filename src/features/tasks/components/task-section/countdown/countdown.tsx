'use client';

import { ClockIcon } from 'lucide-react';
import { useCountdown, useIsMounted } from '@/hooks';
import { styles } from './countdown.styles';

interface CountdownProps {
  endTime: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ endTime }) => {
  const isMounted = useIsMounted();
  const { formattedCountdown, msRemaining } = useCountdown(endTime);
  const label = `Refreshes at ${endTime.toLocaleTimeString()} on ${endTime.toLocaleDateString()}`;

  if (!isMounted) {
    // Empty container maintains layout during client-side hydration
    return <div className={styles.container} />;
  }

  // If the countdown has reached zero, refresh the page
  if (msRemaining <= 0) {
    globalThis.location.reload();
  }

  return (
    <div className={styles.container} aria-label={label}>
      <ClockIcon
        className={styles.icon}
        aria-hidden='true'
        role='presentation'
      />
      <span aria-hidden title={label}>
        {formattedCountdown}
      </span>
    </div>
  );
};
