import { css } from '@/styled-system/css';

export const styles = {
  content: css({
    inlineSize: '64',
    padding: '2',
    backgroundColor: 'slate.900',
    borderWidth: 'thin',
    borderColor: 'slate.800',
    borderRadius: 'md',
    boxShadow: 'lg',
    shadowColor: 'black/50',
    animationDuration: 'normal',
    animationTimingFunction: 'ease',

    '&[data-side="top"]': {
      animationName: 'slideDownAndFade'
    },
    '&[data-side="right"]': {
      animationName: 'slideLeftAndFade'
    },
    '&[data-side="bottom"]': {
      animationName: 'slideUpAndFade'
    },
    '&[data-side="left"]': {
      animationName: 'slideRightAndFade'
    }
  })
};
