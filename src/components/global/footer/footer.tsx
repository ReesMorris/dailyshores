import { siGithub } from 'simple-icons';
import { Link } from '@/components/common/link';
import { styles } from './footer.styles';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href='https://github.com/ReesMorris/dailyshores'
        aria-label='GitHub'
        className={styles.link}
      >
        <div
          dangerouslySetInnerHTML={{ __html: siGithub.svg }}
          className={styles.icon}
        />
      </Link>
    </footer>
  );
};
