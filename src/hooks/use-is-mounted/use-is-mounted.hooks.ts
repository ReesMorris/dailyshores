import { useState, useEffect } from 'react';

/**
 * A hook that returns whether the component has mounted on the client-side.
 * Useful for avoiding hydration mismatches with browser-only code.
 *
 * @returns `true` if the component has mounted, `false` otherwise.
 */
export const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
