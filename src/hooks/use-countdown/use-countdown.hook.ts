'use client';

import { useTime } from '@/providers/time';
import { usePrefersReducedMotion } from '../use-prefers-reduced-motion';

/**
 * Hook that returns a formatted countdown to a target date.
 * @param targetDate - The target date to count down to.
 * @returns A formatted countdown string.
 */
export const useCountdown = (targetDate: Date) => {
  const prm = usePrefersReducedMotion();

  // Get the difference between the target date and the current date
  const now = useTime();
  const target = new Date(targetDate);
  const diff = Math.max(0, target.getTime() - now.getTime());

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Format the countdown
  const formatted = [
    days > 0 ? `${days}d` : '',
    hours > 0 || days > 0 ? `${hours}h` : '',
    minutes > 0 || hours > 0 || days > 0 ? `${minutes}m` : '',
    prm === false ? `${seconds}s` : '' // Only show seconds if reduced motion is disabled
  ]
    .filter(Boolean)
    .join(' ');

  // Return the formatted countdown
  return formatted;
};
