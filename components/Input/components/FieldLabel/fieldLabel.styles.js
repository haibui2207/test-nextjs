import { createUseStyles } from 'react-jss';

import COLORS from '../../../../constants/COLORS';
import { hexToRgbA, rem } from '../../../../utils/jss';

export default createUseStyles({
  root: {
    display: 'inline-block',
    fontWeight: 500,
    fontSize: rem(12),
    lineHeight: rem(16),
    color: hexToRgbA(COLORS.textBlack, 0.8),
    marginBottom: rem(8),
    fontFamily: 'inherit',
    '&.required:after': { fontSize: rem(16), content: '" *"', color: 'red' },
  },
});
