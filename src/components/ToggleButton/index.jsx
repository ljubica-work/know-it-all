import React from 'react';

import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';

import './ToggleButton.scss';

const ToggleButton = () => {
  return (
    <div className='toggle-button'>
      <Sun />
      <label className='toggle-button__label'>
        <input type='checkbox' className='toggle__checkbox' />
        <span className='toggle__slider'></span>
      </label>
      <Moon />
    </div>
  );
};

export default ToggleButton;
