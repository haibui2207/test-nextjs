import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './button.styles';

const Button = ({
  size,
  color,
  disabled,
  children,
  dataTest,
  className,
  tag: Component,
  ...restProps
}) => {
  const classes = useStyles();

  return (
    <Component
      className={classNames(
        classes.root,
        size,
        color,
        disabled && 'disabled',
        className,
      )}
      disabled={disabled}
      data-test={dataTest || 'component-button-root'}
      {...restProps}
    >
      {children}
    </Component>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.node,
  disabled: PropTypes.bool,
  dataTest: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary']),
};
Button.defaultProps = {
  dataTest: '',
  className: '',
  tag: 'button',
  size: 'medium',
  disabled: false,
  color: 'primary',
};

export default memo(Button);
