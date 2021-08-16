import React from 'react';

import RadioButton from '.';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

const Template = (args) => {
  return <RadioButton {...args} />;
};

export const StandardRadioButton = Template.bind({});
StandardRadioButton.args = {
  label: 'Radio Button',
  name: 'test',
};
