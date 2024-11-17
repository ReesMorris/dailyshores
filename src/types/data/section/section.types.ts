import type { SectionTask } from './section-task.types';

export interface Section {
  id: string;
  title: string;
  endTime?: Date;
  profit?: number;
  tasks: SectionTask[];
}
