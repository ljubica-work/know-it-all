import React from 'react';

import Card from '.';
import Center from '../Center';

export default {
  title: 'Card',
  component: Card,
  decorators: [(story) => <Center>{story()}</Center>],
  args: {
    cardInfo: {
      time: '5h ago',
      engagement: 'Full Time',
      title: 'Senior Software Engineer',
      company: 'Scoot',
      location: 'United Kingdom',
      image: 'card-image.svg',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F2F2F2' },
        { name: 'dark', value: '#121721' },
      ],
    },
  },
};

const Template = (args) => {
  return <Card {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
};
Dark.parameters = {
  backgrounds: { default: 'dark' },
};
