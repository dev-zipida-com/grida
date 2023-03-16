import React from 'react';
import Comment from 'components/comment';

export default {
  title: 'grida/comment',
  component: Comment,
  argType: {
    title: {
      name: 'title',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
      },
    },
    content: {
      name: 'content',
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
  },
};

const Template = ({ title, content, icon, ...args }) => (
  <Comment title={title} content={content} icon={icon} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
