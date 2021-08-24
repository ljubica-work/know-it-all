import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import Button from '../Button';

const MultiSelectQuestion = ({ options, hadleChange }) => {
  return <div className='multi-select'>MULTI SELECT</div>;
};

MultiSelectQuestion.propTypes = {
  options: PropTypes.object,
  hadleChange: PropTypes.func,
};

export default MultiSelectQuestion;
