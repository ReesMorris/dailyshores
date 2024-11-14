import { css } from '@/styled-system/css';

export const styles = {
  item: css({
    display: 'flex',
    alignItems: 'center',
    paddingInline: '2',
    paddingBlock: '1.5'
  }),
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    gap: '2',
    cursor: 'pointer',
    transition: 'colors',
    fontWeight: 'medium',
    borderRadius: 'sm',
    color: 'gray.300',
    fontSize: 'sm',

    _highlighted: {
      color: 'white',
      backgroundColor: 'slate.800'
    },
    _focus: {
      outline: 'none'
    }
  }),
  icon: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    inlineSize: '3.5',
    blockSize: '3.5',
    color: 'gray.400'
  }),
  text: css({
    lineClamp: 1
  }),
  external: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginInlineStart: 'auto',
    flexShrink: 0,
    inlineSize: '2.5',
    blockSize: '2.5',
    color: 'gray.600'
  })
};
