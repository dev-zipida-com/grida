import React from 'react';
import ReplyEditor from 'components/reply-editor';

export default {
  title: 'grida/reply-editor',
  component: ReplyEditor,
  argType: {
    icon: {
      name: 'icon',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
  },
};

const Template = ({ icon, ...args }) => <ReplyEditor icon={icon} {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
