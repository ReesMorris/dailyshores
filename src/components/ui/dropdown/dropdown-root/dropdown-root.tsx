'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styles } from './dropdown-root.styles';

interface DropdownRootProps {
  trigger: React.ReactNode;
  triggerAsChild?: boolean;
  sideOffset?: number;
  children?: React.ReactNode;
}

export const DropdownRoot: React.FC<DropdownRootProps> = ({
  trigger,
  triggerAsChild = false,
  sideOffset = 5,
  children
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild={triggerAsChild}>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.content}
          align='start'
          sideOffset={sideOffset}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
