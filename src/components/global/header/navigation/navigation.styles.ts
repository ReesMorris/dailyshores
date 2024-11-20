import { css } from '@/styled-system/css';

export const styles = {
  nav: css({
    flexShrink: '1',
    flexWrap: 'wrap',
    display: 'flex',
    alignItems: 'center',
    blockSize: 'full',
    overflow: 'hidden',

    mdDown: {
      display: 'none'
    }
  }),
  list: css({
    display: 'flex',
    alignItems: 'center',
    blockSize: 'full'
  }),
  item: css({
    display: 'flex',
    alignItems: 'center',
    blockSize: 'full'
  })
};
