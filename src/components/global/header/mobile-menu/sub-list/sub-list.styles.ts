import { css } from '@/styled-system/css';

export const styles = {
  list: css({
    display: 'flex',
    flexDirection: 'column'
  }),
  subList: css({
    marginBlockStart: '2',
    paddingBlockStart: '4',
    borderBlockStartWidth: 'thin',
    borderBlockStartColor: 'slate.800'
  }),
  subListTitle: css({
    paddingInline: '4',
    color: 'gray.400',
    fontSize: 'xs',
    fontWeight: 'medium',
    marginBlockEnd: '2'
  })
};
