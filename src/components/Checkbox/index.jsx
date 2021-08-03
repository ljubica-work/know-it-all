import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ label, name }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='checkbox'>
      <label className='checkbox__label'>
        {label}

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
};

export default Checkbox;
