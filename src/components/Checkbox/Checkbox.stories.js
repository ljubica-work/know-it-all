import React from 'react';

import Checkbox from '.';
import Center from '../Center';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => {
  return <Checkbox {...args} />;
};

export const StandardCheckbox = Template.bind({});
StandardCheckbox.args = {
  label: 'Checkbox',
  name: 'test',
};
