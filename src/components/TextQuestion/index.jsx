import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

import './TextQuestion.scss';

const TextQuestion = ({ handleChange }) => {
  return (
    <div className='text-question'>
      <Input
        onChange={(event) => handleChange(event)}
        placeholder='Answer...'
      />
    </div>
  );
};

TextQuestion.propTypes = {
  options: PropTypes.object,
  handleChange: PropTypes.func,
};

export default TextQuestion;
