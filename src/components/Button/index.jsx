import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';

export const ButtonTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DARK: 'dark',
};

const Button = ({
  variant = ButtonTypes.PRIMARY,
  children,
  className,
  ...rest
}) => {
  const classes = cx({
    [className]: className,
    button: true,
  });
  return (
    <button {...rest} className={`${classes} button--${variant} `}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Button;
