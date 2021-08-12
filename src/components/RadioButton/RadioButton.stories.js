import React from 'react';

import RadioButton from '.';
import Center from '../Center';

export default {
  title: 'RadioButton',
  component: RadioButton,
  decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => {
  return <RadioButton {...args} />;
};

export const StandardRadioButton = Template.bind({});
StandardRadioButton.args = {
  label: 'Radio Button',
  name: 'test',
};
