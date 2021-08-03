import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ variant = 'primary', children }) => {
  return <button className={`button button--${variant}`}>{children}</button>;
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
};

export default Button;
