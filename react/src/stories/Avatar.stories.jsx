import React from 'react';
import Avatar from 'components/avatar';

export default {
  title: 'grida/avatar',
  component: Avatar,
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
  <Avatar {...args}>{label ?? 'Icon'}</Avatar>
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
