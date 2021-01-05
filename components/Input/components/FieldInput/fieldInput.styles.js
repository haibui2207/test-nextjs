import { createUseStyles } from 'react-jss';

import COLORS from '../../../../constants/COLORS';
import { hexToRgbA, rem } from '../../../../utils/jss';
import BREAKPOINTS from '../../../../constants/BREAKPOINTS';

export default createUseStyles({
  root: {
    fontFamily: 'inherit',
    width: '100%',
    lineHeight: 'normal',
    fontWeight: 400,
    boxSizing: 'border-box',
    padding: [0, rem(16)],
    color: COLORS.textDarkBlack,
    backgroundColor: COLORS.bgWhite,
    border: `1px solid ${hexToRgbA(COLORS.borderLightGray, 0.5)}`,
    borderRadius: rem(4),
    '&:focus': { outline: 'none', borderColor: COLORS.primary },
    '&::placeholder': { color: COLORS.textDarkGray },
    '-moz-appearance': 'textfield',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
    '&::-ms-clear, &::-ms-reveal': { display: 'none' },
    '&:-ms-input-placeholder': { color: COLORS.textDarkGray },
    '&:disabled': {
      cursor: 'not-allowed',
      color: COLORS.textGray,
      backgroundColor: COLORS.bgLightGray,
    },
    '&.large': { height: rem(48), fontSize: rem(18) },
    '&.medium': { height: rem(40), fontSize: rem(16) },
    '&.small': { height: rem(32), fontSize: rem(14) },
    '&.error': { borderColor: COLORS.borderRed },
  },

  [`@media only screen and (max-width: ${BREAKPOINTS.maxSm}px)`]: {
    root: {
      '&.large, &.medium, &.small': { fontSize: rem(14), height: rem(32) },
    },
  },
});
