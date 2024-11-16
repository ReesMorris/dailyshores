import { styles } from './tag.styles';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'red' | 'yellow';
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  ...rest
}) => {
  return (
    <span className={styles.tag({ variant })} {...rest}>
      {children}
    </span>
  );
};
