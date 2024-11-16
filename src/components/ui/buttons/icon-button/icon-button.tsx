import { cn } from '@/utils/cn';
import { styles } from './icon-button.styles';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  ...props
}) => {
  // Throw an error if there is no label
  if (!props['aria-label'] && !props.title) {
    throw new Error(
      'An `aria-label` or `title` prop must be provided for accessibility'
    );
  }

  return (
    <button className={cn(styles.button, className)} {...props}>
      <span aria-hidden className={styles.icon}>
        {icon}
      </span>
    </button>
  );
};
