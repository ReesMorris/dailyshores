import { ChevronDown } from 'lucide-react';
import { Link } from '@/components/common/link';
import type { NavigationItem as NavigationItemType } from '@/types';
import { styles } from './navigation-item.styles';

interface NavigationItemProps {
  item: NavigationItemType;
  showChevron?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  showChevron = false
}) => {
  return (
    <Link href={item.url} className={styles.link}>
      {item.title}
      {showChevron && <ChevronDown className={styles.chevron} />}
    </Link>
  );
};
