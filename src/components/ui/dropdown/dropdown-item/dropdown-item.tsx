'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ExternalLinkIcon } from 'lucide-react';
import { Link } from '@/components/common/link';
import { Svg } from '../../svg';
import { styles } from './dropdown-item.styles';

interface DropdownItemProps {
  icon?: {
    path: string;
    viewBox: string;
  };
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  icon,
  href,
  external,
  children
}) => {
  // Wraps the children in a link if a href is provided
  const Wrapper = ({ children, className, ...rest }: WrapperProps) => {
    if (href) {
      return (
        <Link href={href} className={className} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  };

  return (
    <DropdownMenu.Item asChild className={styles.item}>
      <Wrapper className={styles.wrapper}>
        {icon && (
          <Svg
            path={icon.path}
            viewBox={icon.viewBox}
            className={styles.icon}
          />
        )}
        <span className={styles.text}>{children}</span>
        {external && (
          <span className={styles.external}>
            <ExternalLinkIcon />
          </span>
        )}
      </Wrapper>
    </DropdownMenu.Item>
  );
};
