import React from 'react';

import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';

import './SearchModal.scss';

const SearchModal = () => {
  return (
    <div className='search-modal'>
      <Input placeholder='Filter by location...' />
      <div className='search-modal__bottom-wrapper'>
        <Checkbox label='Full Time Only' name='fill-time' />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default SearchModal;
