import { Wrapper } from '../wrapper';
import { styles } from './header.styles';
import { Logo } from './logo';
import { Navigation } from './navigation';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <Logo />
        <Navigation />
      </Wrapper>
    </header>
  );
};
