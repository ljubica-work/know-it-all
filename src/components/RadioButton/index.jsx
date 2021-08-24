import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.scss';

const RadioButton = ({ label, name, handleChange }) => {
  return (
    <div className='radio-button'>
      <label className='radio-button__label'>
        {label}
        <input
          type='radio'
          className='radio-button__input'
          name={name}
          onChange={handleChange}
        />
        <span className='radio-button__checkmark'></span>
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default RadioButton;
