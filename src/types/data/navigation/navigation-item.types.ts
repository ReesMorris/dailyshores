export interface NavigationItem {
  id: string;
  title: string;
  url: string;
  icon?: {
    path: string;
    viewBox: string;
  };
}
