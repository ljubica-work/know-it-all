import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ label, name, handleChange }) => {
  return (
    <div className='checkbox'>
      <label className='checkbox__label'>
        {label}

        <input
          type='checkbox'
          className='checkbox__input'
          onChange={(event) => handleChange(event)}
          name={name}
          value={name}
        />
        <span className='checkbox__checkmark'></span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Checkbox;
