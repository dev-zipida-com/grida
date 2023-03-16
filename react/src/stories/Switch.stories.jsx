import React from 'react';
import Switch from 'components/switch';

export default {
  title: 'grida/switch',
  component: Switch,
  argType: {
    value: {
      name: 'value',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
  },
};

const Template = ({ ...args }) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
