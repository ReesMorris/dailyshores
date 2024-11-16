import { CheckIcon } from 'lucide-react';
import { styles } from './checkbox.styles';

interface CheckboxProps {
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <div
      className={styles.checkbox}
      data-checked={checked || undefined}
      role='presentation'
    >
      {checked && <CheckIcon className={styles.icon} role='presentation' />}
    </div>
  );
};
