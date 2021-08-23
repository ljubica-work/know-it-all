import React from 'react';

import ToggleButton from '../ToggleButton/index';

export default {
  title: 'ToggleButton',
  parameters: {
    backgrounds: {
      default: 'violet',
      values: [{ name: 'violet', value: '#5964E0' }],
    },
  },
};

export const Standard = () => {
  return <ToggleButton />;
};
