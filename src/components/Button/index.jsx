import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const ButtonTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DARK: 'dark',
};

const Button = ({ variant = ButtonTypes.PRIMARY, children }) => {
  return <button className={`button button--${variant}`}>{children}</button>;
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
};

export default Button;
