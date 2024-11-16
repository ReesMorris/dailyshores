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
    justifyContent: 'space-between',
    marginBlockEnd: '4'
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
  profit: css({
    color: 'yellow.400',
    fontWeight: 'medium'
  }),
  controls: css({
    display: 'flex',
    gap: '2'
  }),
  list: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5'
  })
};
