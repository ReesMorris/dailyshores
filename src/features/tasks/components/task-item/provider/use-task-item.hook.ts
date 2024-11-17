import { useContext } from 'react';
import { TaskItemContext } from './task-item.provider';

export const useTaskItem = () => {
  const context = useContext(TaskItemContext);
  if (!context) {
    throw new Error('useTaskItem must be used within a TaskItemProvider');
  }

  return context;
};
