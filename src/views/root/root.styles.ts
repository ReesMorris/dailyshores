import { css } from '@/styled-system/css';

export const styles = {
  wrapper: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBlockStart: 'calc({sizes.header} + {spacing.6})'
  })
};
