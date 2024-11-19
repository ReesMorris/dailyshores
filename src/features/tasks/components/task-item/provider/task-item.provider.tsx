'use client';

import { createContext, useCallback, useMemo, useState } from 'react';
import type { SectionTask } from '@/types';
import { useTaskSection } from '../../task-section/provider';
import type { Ids } from './utils';
import { getIsCompleted, markCompleted, useIds } from './utils';

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
  const { section } = useTaskSection();
  const [isCompleted, setIsCompleted] = useState(getIsCompleted(section, task));
  const [showDetails, setShowDetails] = useState(false);

  /**
   * Set the completion status of the task by updating locals torage
   * and the component state.
   */
  const handleSetCompleted = useCallback(
    (isCompleted: boolean) => {
      markCompleted(section, task, isCompleted);
      setIsCompleted(isCompleted);
    },
    [section, task]
  );

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => {
    return {
      task,
      ids,
      isCompleted,
      setIsCompleted: handleSetCompleted,
      showDetails,
      setShowDetails
    };
  }, [task, ids, isCompleted, handleSetCompleted, showDetails, setShowDetails]);

  return (
    <TaskItemContext.Provider value={contextValue}>
      {children instanceof Function ? children(contextValue) : children}
    </TaskItemContext.Provider>
  );
};
