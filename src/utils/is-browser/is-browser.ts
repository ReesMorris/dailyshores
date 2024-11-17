/**
 * Check if the code is running in a browser environment.
 * @returns `true` if the code is running in a browser environment, `false` otherwise.
 */
export const isBrowser = () => {
  // eslint-disable-next-line unicorn/prefer-global-this
  return typeof window !== 'undefined';
};
