import React from 'react';

import Input from '.';
import Center from '../Center';

export default {
  title: 'Input',
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['magnifier', 'location'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
  },
};

const Template = (args) => {
  return <Input {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  placeholder: 'Enter desired job...',
  type: 'magnifier',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  placeholder: 'Enter desired job...',
  type: 'magnifier',
};
