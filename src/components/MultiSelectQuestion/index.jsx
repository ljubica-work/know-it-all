import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';

const MultiSelectQuestion = ({ options, handleChange }) => {
  return (
    <div className='multi-select'>
      {Object.keys(options).map((option) => (
        <Checkbox
          label={options[option]}
          name={options[option]}
          key={option}
          handleChange={(event) => handleChange(event)}
        />
      ))}
    </div>
  );
};

MultiSelectQuestion.propTypes = {
  options: PropTypes.object,
  handleChange: PropTypes.func,
};

export default MultiSelectQuestion;
