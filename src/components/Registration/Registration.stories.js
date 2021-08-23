import React from 'react';

import Registration from '.';

export default {
  title: 'Registration',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#9daec2' }],
    },
  },
};

export const Standard = () => {
  return <Registration />;
};
