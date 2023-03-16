import React from 'react';
import Card from 'components/card';

export default {
  title: 'grida/card',
  component: Card,
  argType: {
    label: {
      name: 'label',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'String | React Node' },
      },
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    type: {
      name: 'type',
      control: '',
      description: '',
      table: {
        defaultValue: { sumamry: 'button' },
        type: { summary: 'string | button | submit | reset' },
      },
    },
  },
};

const Template = ({ label, ...args }) => (
  <Card {...args}>{label ?? 'Text'}</Card>
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
