import React from 'react';

import Button from '.';
import Center from '../Center';

export default {
  title: 'Button',
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button 1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button 2',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  children: 'Button 2 Dark',
};
