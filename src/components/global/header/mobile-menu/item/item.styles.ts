import { css } from '@/styled-system/css';

export const styles = {
  item: css({
    display: 'flex',
    alignItems: 'center',
    gap: '2',
    paddingInline: '4',
    paddingBlock: '2',
    color: 'gray.300',
    borderRadius: 'md',
    transition: 'colors',
    fontWeight: 'medium',

    _hover: {
      backgroundColor: 'white/3',
      color: 'gray.100'
    },
    _active: {
      backgroundColor: 'white/6',
      color: 'gray.100'
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
