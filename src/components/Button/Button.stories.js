import React from 'react';

import Button from '.';
import Center from '../Center';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Just a button',
  },
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export const Primary = () => {
  return <Button variant='primary'>Primary</Button>;
};

export const Secondary = () => {
  return <Button variant='secondary'>Secondary</Button>;
};

export const Success = () => {
  return <Button variant='success'>Success</Button>;
};

export const Danger = () => {
  return <Button variant='danger'>Danger</Button>;
};

const Template = (args) => {
  return <Button {...args} />;
};

export const PrimaryWithArguments = Template.bind({});
PrimaryWithArguments.args = {
  variant: 'primary',
  children: 'Primary with args',
};

export const SecondaryWithArguments = Template.bind({});
SecondaryWithArguments.args = {
  variant: 'secondary',
  children: 'Secondary with args',
};

export const LongPrimaryWithArgs = Template.bind({});
LongPrimaryWithArgs.args = {
  ...PrimaryWithArguments.args,
  // children: 'Long primary with args',
};
