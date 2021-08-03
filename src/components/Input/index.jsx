import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ size = 'medium', type = 'text', ...rest }) => {
  return <input type={type} className={`input input--${size}`} {...rest} />;
};

Input.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
