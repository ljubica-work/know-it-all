import React from 'react';
import { ReactComponent as TriangleLeft } from '../../assets/svg/triangle-left.svg';
import { ReactComponent as TriangleMiddle } from '../../assets/svg/triangle-middle.svg';
import { ReactComponent as TriangleRight } from '../../assets/svg/triangle-right.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__inner'>
        <div className='header__logo'>knowIT</div>
        <TriangleLeft className='header__triangle header__triangle--left' />
        <TriangleMiddle className='header__triangle header__triangle--middle' />
        <TriangleRight className='header__triangle header__triangle--right' />
      </div>
    </div>
  );
};

export default Header;
