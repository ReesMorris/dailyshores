import { cn } from '@/utils/cn';
import { styles } from './badge.styles';

interface BadgeProps {
  icon?: React.ReactNode;
  variant?: 'default' | 'blue' | 'green' | 'red';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  icon,
  variant = 'default',
  className,
  children
}) => {
  return (
    <div className={cn(styles.badge({ variant }), className)}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
