import { css } from '@/styled-system/css';

export const styles = {
  header: css({
    inlineSize: '100%',
    display: 'flex'
  }),
  item: css({
    paddingInline: '4',
    paddingBlock: '3',
    cursor: 'pointer',

    _hover: {
      backgroundColor: 'slate.800/80'
    }
  }),
  left: css({
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  leftInner: css({
    display: 'flex',
    alignItems: 'center',
    gap: '2'
  }),
  title: css({
    lineClamp: 1,
    fontWeight: 'medium',

    '&[data-completed]': {
      textDecoration: 'line-through',
      color: 'gray.500'
    }
  }),
  rewardSummary: css({
    fontSize: 'sm',
    color: 'gray.400'
  }),
  right: css({
    flexShrink: 0
  }),
  infoIcon: css({
    inlineSize: '4',
    blockSize: '4',
    color: 'gray.400'
  })
};
