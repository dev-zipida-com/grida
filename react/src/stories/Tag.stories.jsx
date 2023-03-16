import React from 'react';
import Tag from 'components/tag';

export default {
  title: 'grida/tag',
  component: Tag,
  argType: {
    type: {
      name: 'type',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
    icon: {
      name: 'icon',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: '.' },
      },
    },
    label: {
      name: 'label',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
  },
};

const Template = ({ type, icon, label, ...args }) => (
  <Tag type={type} icon={icon} label={label} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
