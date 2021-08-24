import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './Input.scss';

export const InputVariants = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const iconTypes = {
  LOCATION: 'location',
  MAGNIFIER: 'magnifier',
  EMAIL: 'email',
  PASSWORD: 'password',
};

const Input = ({ variant = InputVariants.LIGHT, iconType, ...rest }) => {
  return (
    <div className={`input input--${variant}`}>
      {iconType && (
        <div className='input__icon-wrapper'>
          <Icon name={iconType} className='input__icon' />
        </div>
      )}
      <input {...rest} className='input__field' />
    </div>
  );
};

Input.propTypes = {
  variant: PropTypes.string,
  iconType: PropTypes.string,
};

export default Input;
