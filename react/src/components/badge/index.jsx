import './index.css';

const Badge = ({ children, ...args }) => {
  return <div {...args}>{children ?? 'Text'}</div>;
};

export default Badge;
