import { cn } from '@/utils/cn';
import { styles } from './wrapper.styles';

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
