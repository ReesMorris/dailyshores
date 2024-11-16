import { styles } from './badge.styles';

interface BadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'green' | 'red';
}

export const Badge: React.FC<BadgeProps> = ({
  icon,
  children,
  variant = 'default'
}) => {
  return (
    <div className={styles.badge({ variant })}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
