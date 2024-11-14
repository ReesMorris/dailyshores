import { styles } from './navigation.styles';
import { PrimaryNavigation } from './primary-navigation';
import { SecondaryNavigation } from './secondary-navigation';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <PrimaryNavigation />
      <SecondaryNavigation />
    </nav>
  );
};
