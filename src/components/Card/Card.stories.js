import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Card from '.';
import Center from '../Center';

export default {
  title: 'Card',
  component: Card,
  decorators: [
    (story) => <Center>{story()}</Center>,
    (story) => <MemoryRouter>{story()}</MemoryRouter>,
  ],
  args: {
    cardInfo: {
      description: 'Test your knowledge in CSS',
      duration: '10 min',
      id: 'css',
      level: 'Advanced',
      name: 'CSS',
      numberOfQuestions: '17',
    },
    className: 'dashboard__card',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F2F2F2' },
        { name: 'dark', value: '#121721' },
      ],
    },
  },
};

const Template = (args) => {
  return <Card {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
};
Dark.parameters = {
  backgrounds: { default: 'dark' },
};
