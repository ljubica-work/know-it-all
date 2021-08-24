import React from 'react';
import PropTypes from 'prop-types';
import questionInstructions from './questionInstructions';

import SingleSelectQuestion from '../SingleSelectQuestion';
import MultiSelectQuestion from '../MultiSelectQuestion';
import TextQuestion from '../TextQuestion';

import './Question.scss';
import Button from '../Button';

const QUESTION_TYPES = {
  single_select: SingleSelectQuestion,
  multi_select: MultiSelectQuestion,
  text_question: TextQuestion,
};

const Question = ({ question, handleChange, handleSubmit, resultMessage }) => {
  const renderOptions = (options, handleChange) => {
    let Options = QUESTION_TYPES[question.type];
    return <Options options={options} handleChange={handleChange} />;
  };

  return (
    <div className='question'>
      <h3 className='question__title'>{question.title}</h3>
      <span className='question_instructions'>
        {questionInstructions[question.type]}
      </span>
      {renderOptions(question.options, handleChange)}
      <Button onClick={() => handleSubmit(question.id)}>Submit</Button>
      <span className='question__message'>{resultMessage}</span>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  resultMessage: PropTypes.string,
};

export default Question;
