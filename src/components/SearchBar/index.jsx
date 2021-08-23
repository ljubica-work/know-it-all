import React from 'react';

import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';

import './SearchBar.scss';

const SearchBar = () => {
  const checkboxLabel = () => {
    if (window.screen.width > 900 && window.innerWidth > 900) {
      return 'Full Time Only';
    } else {
      return 'Full Time';
    }
  };
  return (
    <div className='search-bar__wrapper'>
      <div className='search-bar'>
        <div className='search-bar__title-input'>
          <Input
            variant='light'
            type='magnifier'
            placeholder='Filter by title, companies, expertise…'
          />
        </div>
        <div className='search-bar__location-input'>
          <Input
            variant='light'
            type='location'
            placeholder='Filter by location…'
          />
        </div>
        <div className='search-bar__checkbox-wrapper'>
          <Checkbox
            label={checkboxLabel()}
            name='full-time'
            className='search-bar__checkbox'
          />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
