import React from 'react';
import Badge from 'components/badge';

export default {
  title: 'grida/badge',
  component: Badge,
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
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'button' },
        type: { summary: 'string | button | submit | reset' },
      },
    },
  },
};

const Template = ({ label, ...args }) => (
  <Badge {...args}>{label ?? 'Text'}</Badge>
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
