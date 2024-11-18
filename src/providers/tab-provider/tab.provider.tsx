'use client';

import { createContext, useCallback, useEffect, useRef, useState } from 'react';

interface TabProviderProps {
  tabClass?: string;
  children: React.ReactNode;
}

const TabContext = createContext<boolean>(false);

/**
 * Provider to determine if the user is currently tabbing.
 * If the user is tabbing, this hook will add a class to the body
 * element, which can be used to style the page differently.
 * @param tabClass - The class to add to the body element when the user is tabbing.
 * Defaults to `is-tabbing`.
 * @param children - The children to render
 * @returns The tab context provider
 */
export const TabProvider: React.FC<TabProviderProps> = ({
  tabClass = 'is-tabbing',
  children
}) => {
  const [isTabbing, setIsTabbing] = useState(false);

  const HandleMouse = useRef<() => void>(() => {}); // Initialize as no-op function

  // Listener for a user pressing the `Tab` key
  const HandleTab = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add(tabClass);

        // Swap listeners with a mousedown listener, so we can remove
        // the `is-tabbing` class when the user clicks on something
        globalThis.removeEventListener('keydown', HandleTab);
        globalThis.addEventListener('mousedown', HandleMouse.current);
        setIsTabbing(true);
      }
    },
    [tabClass]
  );

  // Listener for a user clicking on something
  HandleMouse.current = useCallback(() => {
    document.body.classList.remove(tabClass);

    // Swap listeners with a tab listener, so we can add the
    // `is-tabbing` class when the user presses the `Tab` key
    globalThis.removeEventListener('mousedown', HandleMouse.current);
    globalThis.addEventListener('keydown', HandleTab);
    setIsTabbing(false);
  }, [HandleTab, tabClass]);

  // By default, assume the user is not tabbing
  useEffect(() => {
    HandleMouse.current();
  }, []);

  return (
    <TabContext.Provider value={isTabbing}>{children}</TabContext.Provider>
  );
};
