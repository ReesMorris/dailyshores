'use client';

import { useId, useState } from 'react';
import { styles } from './task-item.styles';
import { Header } from './header';
import { Description } from './description';

export interface TaskItemProps {
  title: string;
  reward?: string;
  descriptionText?: string;
  descriptionLink?: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  title,
  reward,
  descriptionText,
  descriptionLink
}) => {
  const id = useId();
  const [completed, setCompleted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const detailsButtonId = `${id}-details-button`;

  return (
    <li>
      <article
        className={styles.container}
        aria-labelledby={titleId}
        data-completed={completed || undefined}
      >
        <Header
          title={title}
          titleId={titleId}
          detailsButtonId={detailsButtonId}
          descriptionId={descriptionId}
          reward={reward}
          isCompleted={completed}
          isExpanded={showDetails}
          hasDescription={Boolean(descriptionText)}
          externalLink={descriptionLink}
          onToggleCompleted={() => setCompleted(!completed)}
          onToggleDetails={() => setShowDetails(!showDetails)}
        />
        {showDetails && (
          <Description
            description={descriptionText}
            descriptionId={descriptionId}
            labelledBy={`${titleId} ${descriptionId}`}
          />
        )}
      </article>
    </li>
  );
};
