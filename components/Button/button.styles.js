import { createUseStyles } from 'react-jss';

import { rem } from '../../utils/jss';
import COLORS from '../../constants/COLORS';
import BREAKPOINTS from '../../constants/BREAKPOINTS';

export default createUseStyles({
  root: {
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    lineHeight: rem(24),
    padding: [0, rem(16)],
    textAlign: 'center',
    borderRadius: rem(4),
    position: 'relative',
    transition: 'background-color .1s linear',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    textDecoration: 'none',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '&:focus': { outline: 'none' },
    '&:hover': { cursor: 'pointer' },
    '&.large': { height: rem(48), fontSize: rem(18) },
    '&.medium': { height: rem(40), fontSize: rem(16) },
    '&.small': { height: rem(32), fontSize: rem(14) },
    '&.default': {
      color: COLORS.textDarkGray,
      border: `1px solid ${COLORS.borderLight}`,
      backgroundColor: COLORS.bgWhite,
      '&.disabled': {
        cursor: 'not-allowed',
        color: COLORS.textGray,
        backgroundColor: COLORS.bgLightGray,
      },
    },
    '&.primary': {
      border: 'none',
      color: COLORS.textWhite,
      backgroundColor: COLORS.primary,
      '&.disabled': {
        cursor: 'not-allowed',
        color: COLORS.textGray,
        backgroundColor: COLORS.bgLightGray,
      },
    },
    '&.secondary': {
      color: COLORS.primary,
      border: `1px solid ${COLORS.primary}`,
      backgroundColor: COLORS.bgWhite,
      '&.disabled': {
        cursor: 'not-allowed',
        borderColor: COLORS.borderLight,
        color: COLORS.textDarkGray,
      },
    },
    '&.tertiary': {
      color: COLORS.textDarkBlack,
      border: 'none',
      backgroundColor: 'transparent',
      '&.disabled': { cursor: 'not-allowed', color: COLORS.textGray },
    },
  },

  '@media (hover: hover) and (pointer: fine)': {
    root: {
      '&.default:not(.disabled):hover': {
        color: COLORS.textWhite,
        backgroundColor: COLORS.primary,
      },
      '&.primary:not(.disabled):hover': {
        backgroundColor: COLORS.primaryDark,
      },
      '&.secondary:not(.disabled):hover': {
        backgroundColor: COLORS.primaryLight,
      },
      '&.tertiary:not(.disabled):hover': {
        color: COLORS.primary,
      },
    },
  },
  [`@media only screen and (max-width: ${BREAKPOINTS.maxSm}px)`]: {
    root: {
      '&.large, &.medium, &.small': { fontSize: rem(14), height: rem(32) },
    },
  },
});
