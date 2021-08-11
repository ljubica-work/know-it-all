import React from 'react';
import PropTypes from 'prop-types';

import './Question.scss';

const Question = ({ question, handleChange, handleSubmit }) => {
  return (
    <div className='question'>
      <h3>{question.title}</h3>
      {question.type !== 'text_question' ? (
        // if question does not require text answer
        Object.keys(question.options).map((option) => (
          <label key={option}>
            {question.type === 'single_select' ? (
              //  if question is single select, give us radio input
              <input
                type='radio'
                name='answer'
                value={option}
                onChange={(event) => handleChange(event)}
              />
            ) : (
              // else if it's multi select, give us checkbox input, so we can choose multiple opions
              <input
                type='checkbox'
                name={option}
                value={option}
                onChange={(event) => handleChange(event)}
              />
            )}
            {question.options[option]}
          </label>
        ))
      ) : (
        // else if it does require text answer, give us text input
        <input
          type='text'
          placeholder='Type answer'
          onChange={(event) => handleChange(event)}
        />
      )}
      <button onClick={() => handleSubmit(question.id)}>Submit</button>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Question;
