'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styles } from './dropdown-label.styles';

interface DropdownLabelProps {
  children: React.ReactNode;
}

export const DropdownLabel: React.FC<DropdownLabelProps> = ({ children }) => {
  return (
    <DropdownMenu.Label className={styles.label}>{children}</DropdownMenu.Label>
  );
};
