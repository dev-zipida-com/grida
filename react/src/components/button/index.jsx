import './index.css';

const Button = ({ children, ...args }) => {
  return <button {...args}>{children ?? 'Button'}</button>;
};

export default Button;
