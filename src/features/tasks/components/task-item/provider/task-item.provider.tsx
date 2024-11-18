'use client';

import { createContext, useMemo, useState } from 'react';
import type { SectionTask } from '@/types';
import type { Ids } from './utils';
import { useIds } from './utils';

interface TaskItemProviderProps {
  task: SectionTask;
  children:
    | React.ReactNode
    | ((props: TaskItemContextProps) => React.ReactNode);
}

interface TaskItemContextProps {
  task: SectionTask;
  ids: Ids;
  isCompleted: boolean;
  setIsCompleted: (isCompleted: boolean) => void;
  showDetails: boolean;
  setShowDetails: (showDetails: boolean) => void;
}

export const TaskItemContext = createContext<TaskItemContextProps | null>(null);

export const TaskItemProvider: React.FC<TaskItemProviderProps> = ({
  task,
  children
}) => {
  const ids = useIds(task);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => {
    return {
      task,
      ids,
      isCompleted,
      setIsCompleted,
      showDetails,
      setShowDetails
    };
  }, [task, ids, isCompleted, setIsCompleted, showDetails, setShowDetails]);

  return (
    <TaskItemContext.Provider value={contextValue}>
      {children instanceof Function ? children(contextValue) : children}
    </TaskItemContext.Provider>
  );
};
