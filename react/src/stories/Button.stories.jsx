import React from 'react';
import Button from 'components/button';

export default {
  title: 'grida/button',
  component: Button,
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
  <Button {...args}>{label ?? 'Button'}</Button>
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
