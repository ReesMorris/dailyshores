export interface SectionTask {
  id: string;
  title: string;
  reward: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
}
