import type { NavigationItem } from '@/types';
import { Item } from '../item';
import { styles } from './sub-list.styles';

interface SubListProps {
  id: string;
  title: string;
  items: NavigationItem[];
  onClick: () => void;
}

export const SubList: React.FC<SubListProps> = ({
  id,
  title,
  items,
  onClick
}) => {
  return (
    <div key={id} className={styles.subList}>
      <div id={id} className={styles.subListTitle}>
        {title}
      </div>
      <ul aria-labelledby={id} className={styles.list}>
        {items.map(subItem => (
          <li key={subItem.id}>
            <Item
              external
              href={subItem.url}
              icon={subItem.icon}
              onClick={onClick}
            >
              {subItem.title}
            </Item>
          </li>
        ))}
      </ul>
    </div>
  );
};
