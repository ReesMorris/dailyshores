import { primaryNavigation } from '@/data';
import { NavigationItem } from '../navigation-item';
import { styles } from './primary-navigation.styles';

export const PrimaryNavigation = () => {
  return (
    <ul className={styles.list} aria-label='Primary Navigation'>
      {primaryNavigation.map(item => (
        <li key={item.id} className={styles.item}>
          <NavigationItem item={item} />
        </li>
      ))}
    </ul>
  );
};
