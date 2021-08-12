import React from 'react';

import Button, { ButtonTypes } from '.';
import Center from '../Center';

export default {
  title: 'Button',
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonTypes.PRIMARY,
  children: 'Button 1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonTypes.SECONDARY,
  children: 'Button 2',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: ButtonTypes.DARK,
  children: 'Button 2 Dark',
};
Dark.parameters = {
  backgrounds: { default: 'dark' },
};
