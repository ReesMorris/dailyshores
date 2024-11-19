import { css } from '@/styled-system/css';

export const styles = {
  footer: css({
    display: 'flex',
    justifyContent: 'center',
    marginBlockStart: '8',
    fontSize: 'sm',
    color: 'gray.500',
    paddingBlock: '12'
  }),
  link: css({
    _hover: {
      color: 'gray.300'
    }
  }),
  icon: css({
    inlineSize: '5',
    blockSize: '5',
    fill: 'currentcolor'
  })
};
