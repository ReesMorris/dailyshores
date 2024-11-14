import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  body: {
    fontSize: 'md',
    minBlockSize: 'screen',
    bgGradient: 'to-b',
    gradientFrom: 'slate.950',
    gradientTo: 'slate.900',
    color: 'gray.100',
    lineHeight: 'relaxed',
    fontFamily:
      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  },

  '*[data-radix-popper-content-wrapper]': {
    zIndex: 'popover !important'
  }
});
