import { css, cva } from '@/styled-system/css';

export const styles = {
  badge: cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      fontSize: 'sm',
      paddingInline: '3',
      paddingBlock: '1',
      borderRadius: 'md'
    },
    variants: {
      variant: {
        default: {
          color: 'gray.400',
          backgroundColor: 'gray.900/40'
        },
        blue: {
          color: 'blue.400',
          backgroundColor: 'blue.950/40'
        },
        green: {
          color: 'green.400',
          backgroundColor: 'green.950/40'
        },
        red: {
          color: 'red.400',
          backgroundColor: 'red.950/40'
        }
      }
    }
  }),
  icon: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    inlineSize: '3',
    blockSize: '3'
  })
};
