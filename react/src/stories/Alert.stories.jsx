import React from 'react';
import Alert from 'components/alert';

export default {
  title: 'grida/alert',
  component: Alert,
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
  <Alert {...args}>{label ?? 'Alert'}</Alert>
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
