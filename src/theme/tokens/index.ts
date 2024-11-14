import type { PartialTheme } from '@pandacss/types';
import keyframes from './keyframes.json';
import sizes from './sizes.json';
import zIndex from './z-indexes.json';

export const theme: PartialTheme = {
  keyframes,
  semanticTokens: {
    sizes,
    zIndex
  }
};
