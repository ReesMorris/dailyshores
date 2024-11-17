'use client';

import { createContext, useState, useEffect } from 'react';

interface TimeProviderProps {
  children: React.ReactNode;
}

type TimeContextType = Date;

export const TimeContext = createContext<TimeContextType | null>(null);

export const TimeProvider: React.FC<TimeProviderProps> = ({ children }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <TimeContext.Provider value={now}>{children}</TimeContext.Provider>;
};
