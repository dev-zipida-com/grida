import './index.css';

const Alert = ({ children, ...args }) => {
  return <div {...args}>{children ?? 'Text'}</div>;
};

export default Alert;
