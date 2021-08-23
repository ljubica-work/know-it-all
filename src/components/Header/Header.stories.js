import React from 'react';

import Header from '.';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
};

export const Standard = () => {
  return <Header />;
};
