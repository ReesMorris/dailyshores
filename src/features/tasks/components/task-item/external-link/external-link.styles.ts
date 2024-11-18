import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    flexShrink: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    blockSize: 'full',
    paddingInline: '4',
    cursor: 'pointer',

    _hover: {
      backgroundColor: 'slate.800/80'
    },

    '&[data-completed]': {
      _hover: {
        backgroundColor: 'slate.800/10'
      }
    }
  }),
  icon: css({
    inlineSize: '4',
    blockSize: '4',
    color: 'gray.400'
  })
};
