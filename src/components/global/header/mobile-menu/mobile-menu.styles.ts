import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    marginInlineStart: 'auto',

    md: {
      display: 'none'
    }
  }),
  navigation: css({
    position: 'fixed',
    insetInlineStart: 0,
    insetInlineEnd: 0,
    insetBlockStart: '{sizes.header}',
    backdropFilter: 'auto',
    backdropBlur: 'md',
    backgroundColor: 'slate.900/80',
    borderBlockEndWidth: 'thin',
    borderBlockEndColor: 'slate.800',
    paddingBlock: '2',
    zIndex: 'sticky',
    overflowY: 'auto',
    blockSize: 'calc(100vh - {sizes.header})',

    md: {
      display: 'none'
    }
  }),
  list: css({
    display: 'flex',
    flexDirection: 'column'
  })
};
