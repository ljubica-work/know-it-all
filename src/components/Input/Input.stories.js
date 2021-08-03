import React from 'react';

import Input from '.';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Small = () => {
  return <Input size='small' placeholder='Small size' />;
};

export const Medium = () => {
  return <Input size='medium' placeholder='Medium size' />;
};

export const Large = () => {
  return <Input size='large' placeholder='Large size' />;
};
