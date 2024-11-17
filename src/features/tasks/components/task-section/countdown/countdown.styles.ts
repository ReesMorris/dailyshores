import { css } from '@/styled-system/css';

export const styles = {
  container: css({
    marginBlockStart: '-1',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5',
    fontSize: 'xs',
    color: 'gray.400',
    blockSize: '3'
  }),
  icon: css({
    inlineSize: '2',
    blockSize: '2'
  })
};
