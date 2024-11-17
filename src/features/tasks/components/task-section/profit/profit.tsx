import { styles } from './profit.styles';

interface ProfitProps {
  profit: string | number;
}

export const Profit: React.FC<ProfitProps> = ({ profit }) => {
  return <div className={styles.profit}>Total Profit: {profit}</div>;
};
