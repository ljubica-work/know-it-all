import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

const TextQuestion = ({ hadleChange }) => {
  return (
    <div className='text-question'>
      <Input />
    </div>
  );
};

TextQuestion.propTypes = {
  options: PropTypes.object,
  hadleChange: PropTypes.func,
};

export default TextQuestion;
