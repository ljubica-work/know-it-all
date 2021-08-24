import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton';

const SingleSelectQuestion = ({ options, handleChange }) => {
  return (
    <div className='single-select'>
      {Object.keys(options).map((option) => (
        <RadioButton
          label={options[option]}
          name='answer'
          key={option}
          handleChange={(event) => handleChange(event)}
        />
      ))}
    </div>
  );
};

SingleSelectQuestion.propTypes = {
  options: PropTypes.object,
  handleChange: PropTypes.func,
};

export default SingleSelectQuestion;
