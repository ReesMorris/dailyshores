/**
 * Monthly resets happen on a specific date each month at the specified time.
 * @param targetDate - Day of month (1-31)
 * @param hours - Hour in UTC (0-23)
 * @param minutes - Minutes (0-59)
 * @returns The end time of the monthly reset.
 */
export const getMonthlyEndTime = (targetDate = 1, hours = 24, minutes = 0) => {
  const date = new Date();

  // Set time to target
  date.setUTCHours(hours, minutes, 0, 0);

  // Get current date of month
  const currentDate = date.getUTCDate();

  // If we haven't reached target date this month
  if (currentDate < targetDate) {
    date.setUTCDate(targetDate);
  }
  // If we're past target date this month, move to next month
  else if (currentDate > targetDate || date.getTime() < Date.now()) {
    // Move to first day of next month
    date.setUTCMonth(date.getUTCMonth() + 1, 1);
    // Then set to target date
    date.setUTCDate(targetDate);
  }

  return date;
};
