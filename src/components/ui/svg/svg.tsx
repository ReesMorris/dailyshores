import { cn } from '@/utils/cn';
import { styles } from './svg.styles';

interface SvgProps {
  path: string;
  viewBox: string;
  className?: string;
}

export const Svg: React.FC<SvgProps> = ({ path, viewBox, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox}
      className={cn(styles.svg, className)}
    >
      <path d={path} />
    </svg>
  );
};
