import React from 'react';

import SearchModal from '.';

export default {
  title: 'SearchModal',
  component: SearchModal,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#9daec2' }],
    },
  },
};

export const Standard = () => {
  return <SearchModal />;
};
