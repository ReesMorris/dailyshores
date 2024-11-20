import { css } from '@/styled-system/css';

export const styles = {
  link: css({
    display: 'flex',
    alignItems: 'center',
    gap: '1',
    blockSize: 'full',
    paddingInline: '4',
    color: 'gray.400',
    transition: 'colors',
    whiteSpace: 'nowrap',

    _hover: {
      color: 'gray.200'
    }
  }),
  chevron: css({
    inlineSize: '3'
  })
};
