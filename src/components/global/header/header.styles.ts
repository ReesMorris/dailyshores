import { css } from '@/styled-system/css';

export const styles = {
  header: css({
    position: 'sticky',
    blockSize: 'header',
    display: 'flex',
    alignItems: 'center',
    insetInline: '0',
    backdropBlur: 'md',
    backgroundColor: 'slate.900/80',
    borderBlockEndWidth: 'thin',
    borderBlockEndColor: 'slate.800',
    marginBlockEnd: '6',
    zIndex: 'sticky'
  }),
  wrapper: css({
    blockSize: 'full',
    display: 'flex',
    alignItems: 'center',
    gap: '8'
  })
};
