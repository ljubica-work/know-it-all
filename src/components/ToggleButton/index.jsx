import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ReactComponent as Sun } from '../../assets/svg/sun.svg';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';

import './ToggleButton.scss';

const ToggleButton = ({ className }) => {
  // const classes = cx({
  //   'toggle-button': true,
  //   [className]: className,
  // });
  return (
    <div className={cx('toggle-button', className)}>
      <Sun />
      <label className='toggle-button__label'>
        <input type='checkbox' className='toggle__checkbox' />
        <span className='toggle__slider'></span>
      </label>
      <Moon />
    </div>
  );
};

ToggleButton.propTypes = {
  className: PropTypes.string,
};

export default ToggleButton;
