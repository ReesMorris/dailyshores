/**
 * Weekly resets happen every week at the specified time.
 * @param targetDay - Day of week (0 = Sunday, 1 = Monday, etc)
 * @param hours - Hour in UTC (0-23)
 * @param minutes - Minutes (0-59)
 * @returns The end time of the weekly reset.
 */
export const getWeeklyEndTime = (targetDay = 1, hours = 24, minutes = 0) => {
  const date = new Date();

  // Set time to target
  date.setUTCHours(hours, minutes, 0, 0);

  // Get the current day (0 = Sunday, 1 = Monday, 2 = Tuesday, etc)
  const currentDay = date.getUTCDay();

  // Calculate days until target day
  const daysUntilTarget = (targetDay + 7 - currentDay) % 7;

  // If it's target day but the time has passed, we want next week
  if (daysUntilTarget === 0 && date.getTime() < Date.now()) {
    date.setDate(date.getDate() + 7);
  } else {
    date.setDate(date.getDate() + daysUntilTarget);
  }

  return date;
};
