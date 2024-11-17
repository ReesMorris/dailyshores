import { ArrowUpDownIcon, RotateCcwIcon } from 'lucide-react';
import { IconButton } from '@/components/ui/buttons';
import { styles } from './controls.styles';

export const Controls: React.FC = () => {
  return (
    <div
      role='toolbar'
      aria-label='Task list controls'
      className={styles.controls}
    >
      <IconButton
        icon={<RotateCcwIcon />}
        aria-label='Refresh'
        title='Refresh'
      />
      <IconButton icon={<ArrowUpDownIcon />} aria-label='Sort' title='Sort' />
    </div>
  );
};
