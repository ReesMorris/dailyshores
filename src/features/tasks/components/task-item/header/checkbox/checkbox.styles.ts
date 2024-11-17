import { css } from '@/styled-system/css';

export const styles = {
  checkbox: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    inlineSize: '4',
    blockSize: '4',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'gray.600',
    backgroundColor: 'slate.700/50',
    borderRadius: 'sm',

    _checked: {
      backgroundColor: 'blue.500',
      borderColor: 'blue.500'
    }
  }),
  icon: css({
    inlineSize: '2.5',
    blockSize: '2.5'
  })
};
