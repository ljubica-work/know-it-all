import React from 'react';

import Input, { InputVariants, iconTypes } from '.';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [iconTypes.MAGNIFIER, iconTypes.LOCATION],
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
  type: iconTypes.MAGNIFIER,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: InputVariants.DARK,
  placeholder: 'Enter desired job...',
  type: iconTypes.MAGNIFIER,
};
Dark.parameters = {
  backgrounds: { default: 'dark' },
};
