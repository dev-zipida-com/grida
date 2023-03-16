import './index.css';

const Alert = ({ children, ...args }) => {
  return <div {...args}>{children ?? 'Icon'}</div>;
};

export default Alert;
