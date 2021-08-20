import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../helpers/Icon';

import './Input.scss';

const Input = ({ variant = 'light', iconType = 'location', ...rest }) => {
  return (
    <div className={`input input--${variant}`}>
      <div className='input__icon-wrapper'>
        <Icon name={iconType} className='input__icon' />
      </div>
      <input {...rest} className='input__field' />
    </div>
  );
};

Input.propTypes = {
  variant: PropTypes.string,
  iconType: PropTypes.string,
};

export default Input;
