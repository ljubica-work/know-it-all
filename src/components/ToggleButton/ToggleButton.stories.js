import React from 'react';

import ToggleButton from '../ToggleButton/index';
import Center from '../Center';

export default {
  title: 'ToggleButton',
  parameters: {
    backgrounds: {
      default: 'violet',
      values: [{ name: 'violet', value: '#5964E0' }],
    },
  },
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Standard = () => {
  return <ToggleButton />;
};
