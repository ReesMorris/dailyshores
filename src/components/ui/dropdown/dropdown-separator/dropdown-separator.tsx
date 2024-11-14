'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styles } from './dropdown-separator.styles';

export const DropdownSeparator: React.FC = () => {
  return <DropdownMenu.Separator className={styles.separator} />;
};
