import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'slate.800/50',
    borderRadius: 'md',

    '&[data-completed]': {
      backgroundColor: 'slate.800/30'
    }
  }),
  row: css({
    inlineSize: 'full',
    display: 'flex',
    alignItems: 'center',
    blockSize: '12'
  })
};
