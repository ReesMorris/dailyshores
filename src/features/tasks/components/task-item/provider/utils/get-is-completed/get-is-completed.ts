import type { Section, SectionTask } from '@/types';
import { isBrowser } from '@/utils/is-browser';

export const getIsCompleted = (
  section: Section,
  task: SectionTask
): boolean => {
  if (!isBrowser()) {
    return false;
  }

  // Get the item from local storage
  const id = `${section.id}-${task.id}`;
  const item = localStorage.getItem(id);
  if (!item) {
    return false;
  }

  // Convert the item to a date
  const itemDate = new Date(Number.parseInt(item));

  // Check if the item is after the end time
  if (new Date() > itemDate) {
    localStorage.removeItem(id);
    return false;
  }

  return true;
};
