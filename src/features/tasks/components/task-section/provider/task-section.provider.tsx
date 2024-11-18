'use client';

import { createContext, useMemo } from 'react';
import type { Section } from '@/types';

interface TaskSectionProviderProps {
  section: Section;
  children: React.ReactNode;
}

interface TaskSectionContextValue {
  section: Section;
}

export const Context = createContext<TaskSectionContextValue | null>(null);

export const TaskSectionProvider: React.FC<TaskSectionProviderProps> = ({
  section,
  children
}) => {
  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => {
    return { section };
  }, [section]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
