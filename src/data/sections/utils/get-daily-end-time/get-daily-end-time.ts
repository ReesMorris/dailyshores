/**
 * Get the next daily reset time.
 * @param hours - Hour in UTC (0-24)
 * @param minutes - Minutes (0-59)
 * @returns The end time of the daily reset.
 */
export const getDailyEndTime = (hours = 24, minutes = 0) => {
  const date = new Date(new Date().setUTCHours(hours, minutes, 0, 0));

  // If the end time is in the past, set it to tomorrow
  if (date.getTime() < Date.now()) {
    date.setDate(date.getDate() + 1);
  }

  return date;
};
