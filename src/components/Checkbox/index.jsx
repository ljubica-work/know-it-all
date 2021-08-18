import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ label, labelSmall, name, className }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`checkbox ${className}`}>
      <label className='checkbox__label'>
        <span className='checkbox__label--large'>{label}</span>
        <span className='checkbox__label--mobile'>{labelSmall}</span>

        <input
          type='checkbox'
          className='checkbox__input'
          onChange={() => setChecked(!checked)}
          name={name}
          checked={checked}
        />
        <span className='checkbox__checkmark'></span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  labelSmall: PropTypes.string,
};

export default Checkbox;
