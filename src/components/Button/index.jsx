import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';

const Button = ({ variant = 'primary', children, className }) => {
  const classes = cx({
    [className]: className,
    button: true,
  });
  return (
    <button className={`${classes} button--${variant} `}>{children}</button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Button;
