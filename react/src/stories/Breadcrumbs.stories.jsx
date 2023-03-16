import React from 'react';
import Breadcrumbs from 'components/breadcrumbs';

export default {
  title: 'grida/breadcrumbs',
  component: Breadcrumbs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
};

const Template = ({ routes, icon, ...args }) => (
  <Breadcrumbs routes={routes} icon={icon} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
