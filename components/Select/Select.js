import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import { FieldLabel, FieldError } from '../Input';

import useStyles from './select.styles';

const Select = ({
  name,
  size,
  label,
  error,
  options,
  onChange,
  required,
  disabled,
  dataTest,
  className,
  ...restProps
}) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(classes.root, className)}
      data-test={dataTest || 'component-select-root'}
    >
      {label ? (
        <FieldLabel htmlFor={name} label={label} required={required} />
      ) : null}
      <ReactSelect
        name={name}
        onChange={(value) => onChange({ name, value })}
        options={options}
        required={required}
        className={classNames(classes.select, size, error && 'error')}
        classNamePrefix="custom-react-select"
        isDisabled={disabled}
        {...restProps}
      />
      {error ? <FieldError error={error} /> : null}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.node,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  dataTest: PropTypes.string,
  className: PropTypes.string,
  isSearchable: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};
Select.defaultProps = {
  error: '',
  dataTest: '',
  className: '',
  size: 'medium',
  disabled: false,
  required: false,
  label: undefined,
  isSearchable: false,
};

export default memo(Select);
