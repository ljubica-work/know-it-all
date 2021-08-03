import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Magnifier } from '../../assets/svg/magnifier.svg';
import { ReactComponent as Location } from '../../assets/svg/location.svg';

import './Input.scss';

const Input = ({ variant = 'light', type = 'location', ...rest }) => {
  const adjustInputSize = () => {
    const inputField = document.querySelector('.input__field');
    inputField.setAttribute(
      'size',
      inputField.getAttribute('placeholder').length,
    );
  };

  useEffect(() => {
    adjustInputSize();
  }, []);

  return (
    <div className={`input input--${variant}`}>
      <div className='input__icon-wrapper'>
        {type === 'location' ? (
          <Location className='input__icon' />
        ) : (
          <Magnifier className='input__icon' />
        )}
      </div>
      <input {...rest} className='input__field' />
    </div>
  );
};

Input.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
