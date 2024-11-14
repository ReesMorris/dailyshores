import type { NavigationItem } from './navigation-item.types';

export type SecondaryNavigation = Section[];

interface Section {
  id: string;
  title: string;
  items: NavigationItem[];
}
