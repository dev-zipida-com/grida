import React from 'react';
import Radio from 'components/radio';

export default {
  title: 'grida/radio',
  component: Radio,
  argType: {
    label: {
      name: 'label',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
    value: {
      name: 'value',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
  },
};

const Template = ({ label, value, ...args }) => (
  <Radio label={label} value={value} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
