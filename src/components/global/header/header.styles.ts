import { css } from '@/styled-system/css';

export const styles = {
  header: css({
    position: 'fixed',
    blockSize: 'header',
    display: 'flex',
    alignItems: 'center',
    insetInline: '0',
    backdropFilter: 'auto',
    backdropBlur: 'md',
    backgroundColor: 'slate.900/80',
    borderBlockEndWidth: 'thin',
    borderBlockEndColor: 'slate.800',
    zIndex: 'sticky'
  }),
  wrapper: css({
    blockSize: 'full',
    display: 'flex',
    alignItems: 'center',
    gap: '8'
  })
};
