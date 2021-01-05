import { createUseStyles } from 'react-jss';

import COLORS from '../../constants/COLORS';
import { hexToRgbA, rem } from '../../utils/jss';
import BREAKPOINTS from '../../constants/BREAKPOINTS';

export default createUseStyles({
  root: {},
  select: {
    fontWeight: 400,
    '&.large': {
      fontSize: rem(18),
      '& .custom-react-select__control': { minHeight: rem(48) },
      '& .custom-react-select__indicator': { height: rem(48) },
    },
    '&.medium': {
      fontSize: rem(16),
      '& .custom-react-select__control': { minHeight: rem(40) },
      '& .custom-react-select__indicator': { height: rem(40) },
    },
    '&.small': {
      fontSize: rem(14),
      '& .custom-react-select__control': { minHeight: rem(32) },
      '& .custom-react-select__indicator': { height: rem(32) },
    },
    '& .custom-react-select__control': {
      borderRadius: rem(4),
      boxShadow: 'none',
      borderColor: hexToRgbA(COLORS.borderLightGray, 0.5),
    },
    '& .custom-react-select__control--is-disabled': {
      backgroundColor: COLORS.bgLightGray,
    },
    '& .custom-react-select__control--menu-is-open': {
      borderColor: COLORS.primary,
      '&:hover': { borderColor: COLORS.primary },
    },
    '& .custom-react-select__value-container': {
      paddingLeft: rem(14),
    },
    '& .custom-react-select__placeholder': {
      color: COLORS.textDarkGray,
      fontSize: 'inherit',
      fontWeight: 'inherit',
      whiteSpace: 'nowrap',
    },
    '& .custom-react-select__indicator-separator': {
      display: 'none',
    },
    '& .custom-react-select__single-value': {
      color: COLORS.textDarkBlack,
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },
    '& .custom-react-select__single-value--is-disabled': {
      color: COLORS.textGray,
    },
    '& .custom-react-select__indicator': {
      padding: [0, rem(12)],
      alignItems: 'center',
    },
    '& .custom-react-select__option': {
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },
    '&.error': {
      '& .custom-react-select__control': {
        borderColor: COLORS.borderRed,
      },
    },
  },

  [`@media only screen and (max-width: ${BREAKPOINTS.maxSm}px)`]: {
    root: {},
    select: {
      '&.large, &.medium, &.small': {
        fontSize: rem(14),
        '& .custom-react-select__control': {
          minHeight: rem(30),
        },
      },
    },
  },
});
