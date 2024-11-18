import { useContext } from 'react';
import { Context } from './task-section.provider';

export const useTaskSection = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useTaskSection must be used within a TaskSectionProvider');
  }

  return context;
};
