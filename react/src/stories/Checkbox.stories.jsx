import React from 'react';
import Checkbox from 'components/checkbox';

export default {
  title: 'grida/checkbox',
  component: Checkbox,
  argType: {
    label: {
      name: 'label',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
    name: {
      name: 'name',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
  },
};

const Template = ({ label, name, ...args }) => (
  <Checkbox label={label} name={name} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
