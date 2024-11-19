import type { Section, SectionTask } from '@/types';
import { isBrowser } from '@/utils/is-browser';

/**
 * Mark a task as completed or incomplete by updating local storage.
 * @param section - The section the task belongs to.
 * @param task - The task to mark as completed or incomplete.
 * @param isCompleted - Whether the task should be marked as completed or incomplete.
 */
export const markCompleted = (
  section: Section,
  task: SectionTask,
  isCompleted: boolean
) => {
  if (!isBrowser() || !section.endTime) {
    return;
  }

  // Add or remove the task from local storage based on its completion status
  const id = `${section.id}-${task.id}`;
  if (isCompleted) {
    const timestamp = new Date(section.endTime).getTime();
    localStorage.setItem(id, timestamp.toString());
  } else {
    localStorage.removeItem(id);
  }
};
