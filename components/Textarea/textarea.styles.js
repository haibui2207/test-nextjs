import { createUseStyles } from 'react-jss';

import { rem } from '../../utils/jss';
import BREAKPOINTS from '../../constants/BREAKPOINTS';

export default createUseStyles({
  root: { lineHeight: '0px' },
  input: {
    padding: [rem(8), rem(16)],
    resize: 'vertical',
    '&.large': { fontSize: rem(18), minHeight: rem(180), maxHeight: rem(320) },
    '&.medium': { fontSize: rem(16), minHeight: rem(160), maxHeight: rem(300) },
    '&.small': { fontSize: rem(14), minHeight: rem(140), maxHeight: rem(280) },
  },

  [`@media only screen and (max-width: ${BREAKPOINTS.maxSm}px)`]: {
    root: {
      '&.large, &.medium, &.small': {
        fontSize: rem(14),
        minHeight: rem(160),
        maxHeight: rem(300),
      },
    },
  },
});
