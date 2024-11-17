'use client';

import { isBrowser } from '@/utils/is-browser';

/**
 * Hook that returns whether the user prefers reduced motion.
 * @returns `true` if `prefers-reduced-motion: reduce` is set in the
 * user's operating system settings, `false` otherwise.
 *
 * If the code is not running in a browser environment, it will return `false`.
 */
export const usePrefersReducedMotion = () => {
  if (!isBrowser()) {
    return false;
  }

  const mediaQuery = globalThis.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersReducedMotion = mediaQuery.matches;

  return prefersReducedMotion;
};
