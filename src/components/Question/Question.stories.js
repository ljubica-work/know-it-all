import React from 'react';

import Question from '.';

export default {
  title: 'Question',
  component: Question,
  args: {
    question: {
      title: 'This is a  question',
      type: 'single_select',
      options: {
        option1: 'wrong',
        option2: 'wrong',
        option3: 'right',
        option4: 'wrong',
      },
      id: '123',
      answer: 'option3',
    },
  },
};

const Template = (args) => {
  return <Question {...args} />;
};

export const Standard = Template.bind({});
