import React from 'react';

import Checkbox from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => {
  return <Checkbox {...args} />;
};

export const StandardCheckbox = Template.bind({});
StandardCheckbox.args = {
  label: 'Checkbox',
  name: 'test',
};
