import React from 'react';

import CirclePercentage from '.';

export default {
  title: 'Percentage',
  component: CirclePercentage,
};

const Template = (args) => {
  return <CirclePercentage {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  percentage: 50,
};
