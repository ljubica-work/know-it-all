import React from 'react';

import Input from '../Input';
import Button from '../Button';

import { ReactComponent as Magnifier } from '../../assets/svg/magnifier-light.svg';

import './MobileSearch.scss';

const MobileSearch = () => {
  return (
    <div className='mobile-search'>
      <Input type='filter' placeholder='Filter by title...' />
      <Button className='mobile-search__button'>
        <Magnifier className='mobile-search__button-icon' />
      </Button>
    </div>
  );
};

export default MobileSearch;
