import { cva } from '@/styled-system/css';

export const styles = {
  tag: cva({
    base: {
      fontSize: 'xs',
      paddingInline: '2',
      paddingBlock: '0.5',
      borderRadius: 'full',
      borderWidth: 'thin',
      borderStyle: 'solid'
    },
    variants: {
      variant: {
        default: {
          color: 'gray.400',
          backgroundColor: 'gray.900/30',
          borderColor: 'gray.800/50'
        },
        blue: {
          color: 'blue.400',
          backgroundColor: 'blue.900/30',
          borderColor: 'blue.800/50'
        },
        red: {
          color: 'red.400',
          backgroundColor: 'red.900/30',
          borderColor: 'red.800/50'
        },
        yellow: {
          color: 'yellow.400',
          backgroundColor: 'yellow.900/30',
          borderColor: 'yellow.800/50'
        }
      }
    }
  })
};
