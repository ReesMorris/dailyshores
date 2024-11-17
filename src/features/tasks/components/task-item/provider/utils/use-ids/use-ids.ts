'use client';

import { useId } from 'react';

export interface Ids {
  id: string;
  titleId: string;
  descriptionId: string;
  detailsButtonId: string;
}

/**
 * Hook that generates unique IDs for the task item component.
 * @returns An object containing the generated IDs.
 */
export const useIds = (): Ids => {
  const id = useId();

  return {
    id,
    titleId: `${id}-title`,
    descriptionId: `${id}-description`,
    detailsButtonId: `${id}-details-button`
  };
};
