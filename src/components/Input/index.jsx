import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Magnifier } from '../../assets/svg/magnifier.svg';
import { ReactComponent as Location } from '../../assets/svg/location.svg';
import { ReactComponent as Filter } from '../../assets/svg/filter-icon.svg';

import './Input.scss';

const Input = ({ variant = 'light', type = 'location', ...rest }) => {
  return (
    <div className={`input input--${variant} input--${type}`}>
      <div className='input__icon-wrapper'>
        {type === 'location' ? (
          <Location className='input__icon' />
        ) : type === 'magnifier' ? (
          <Magnifier className='input__icon' />
        ) : (
          <button className='input__filter-button'>
            <Filter className='icon-input' />
          </button>
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
