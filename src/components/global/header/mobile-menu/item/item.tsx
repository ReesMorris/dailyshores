import { ExternalLinkIcon } from 'lucide-react';
import { Link } from '@/components/common/link';
import { Svg } from '@/components/ui/svg';
import { styles } from './item.styles';

interface ItemProps {
  href: string;
  icon?: {
    path: string;
    viewBox: string;
  };
  external?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Item: React.FC<ItemProps> = ({
  href,
  icon,
  external,
  children,
  onClick
}) => {
  return (
    <Link href={href} className={styles.item} onClick={onClick}>
      {icon && (
        <Svg path={icon.path} viewBox={icon.viewBox} className={styles.icon} />
      )}
      {children}
      {external && (
        <span className={styles.external}>
          <ExternalLinkIcon />
        </span>
      )}
    </Link>
  );
};
