import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5'
  }),
  header: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  left: css({
    display: 'flex',
    alignItems: 'center',
    gap: '3'
  }),
  title: css({
    fontSize: '2xl',
    fontWeight: 'medium'
  }),
  list: css({
    marginBlockStart: '4',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5'
  })
};
