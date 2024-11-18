import { TaskSection } from './task-section';
import { TaskItem } from './task-item';
import { TaskEmpty } from './task-empty';

export const Tasks = {
  Section: TaskSection,
  Item: TaskItem,
  Empty: TaskEmpty
} as const;
