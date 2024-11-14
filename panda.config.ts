import { globalCss } from '@/theme/global.theme';
import { theme } from '@/theme/tokens';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: theme
  },

  globalCss,

  // The output directory for your css system
  outdir: 'styled-system'
});
