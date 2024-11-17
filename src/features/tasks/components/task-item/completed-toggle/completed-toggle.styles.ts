import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    flex: '1',
    blockSize: 'full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: '4',
    cursor: 'pointer',

    _hover: {
      backgroundColor: 'slate.800/80'
    }
  }),
  leftInner: css({
    display: 'flex',
    alignItems: 'center',
    gap: '2'
  }),
  title: css({
    lineClamp: 1,
    fontWeight: 'medium',
    textAlign: 'start',

    '&[data-completed]': {
      textDecoration: 'line-through',
      color: 'gray.500'
    }
  }),
  reward: css({
    fontSize: 'sm',
    color: 'gray.400',
    flexShrink: '0',
    whiteSpace: 'nowrap',

    '&[data-completed]': {
      color: 'gray.500'
    }
  })
};
