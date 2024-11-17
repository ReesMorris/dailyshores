import type { SectionTask } from './section-task.types';

export interface Section {
  id: string;
  title: string;
  refresh: Date;
  profit?: number;
  tasks: SectionTask[];
}