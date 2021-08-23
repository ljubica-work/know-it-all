import React from 'react';

import Card, { CardTypes } from '.';
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
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return <Card {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  variant: CardTypes.LIGHT,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: CardTypes.DARK,
};
Dark.parameters = {
  backgrounds: { default: 'dark' },
};
