import React from 'react';

import MobileSearch from '.';

export default {
  title: 'MobileSearch',
  component: MobileSearch,
  parameters: {
    backgrounds: {
      default: 'violet',
      values: [{ name: 'violet', value: '#5964E0' }],
    },
  },
};

export const Standard = () => {
  return <MobileSearch />;
};
