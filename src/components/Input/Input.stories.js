import React from 'react';

import Input, { InputVariants, InputTypes } from '.';
import Center from '../Center';

export default {
  title: 'Input',
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [InputTypes.MAGNIFIER, InputTypes.LOCATION],
      },
    },
    variant: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return <Input {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  variant: InputVariants.LIGHT,
  placeholder: 'Enter desired job...',
  type: InputTypes.MAGNIFIER,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: InputVariants.DARK,
  placeholder: 'Enter desired job...',
  type: InputTypes.MAGNIFIER,
};
Dark.parameters = {
  backgrounds: { default: 'dark' },
};
