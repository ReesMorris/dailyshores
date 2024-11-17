import { styles } from './description.styles';

interface DescriptionProps {
  description: string;
  descriptionId: string;
  labelledBy: string;
}

export const Description: React.FC<DescriptionProps> = ({
  description,
  descriptionId,
  labelledBy
}) => {
  return (
    <section
      id={descriptionId}
      className={styles.description}
      aria-labelledby={labelledBy}
    >
      {description}
    </section>
  );
};
