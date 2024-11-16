import { css } from '@/styled-system/css';

export const styles = {
  button: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2',
    backgroundColor: 'slate.800',
    borderRadius: 'md',
    transition: 'colors',
    inlineSize: 'ui.xs',
    blockSize: 'ui.xs',
    cursor: 'pointer',

    _hover: {
      backgroundColor: 'slate.700'
    },
    _active: {
      transform: 'scale(0.97)'
    }
  }),
  icon: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    inlineSize: '4',
    blockSize: '4'
  })
};
