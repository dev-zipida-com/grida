import React from 'react';
import Select from 'components/select';

export default {
  title: 'grida/select',
  component: Select,
  argType: {
    options: {
      name: 'options',
      control: 'object',
      description: '',
      defaultValue: [
        { label: 'Test A', value: 'Test A' },
        { label: 'Test B', value: 'Test B' },
        { label: 'Test C', value: 'Test C' },
        { label: 'Test D', value: 'Test D' },
        { label: 'Test E', value: 'Test E' },
        { label: 'Test F', value: 'Test F' },
      ],
      table: {
        category: 'User Input',
      },
    },
  },
};

const Template = ({ options, ...args }) => (
  <Select options={options} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
