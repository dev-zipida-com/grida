import './index.css';

const Card = ({ children, ...args }) => {
  return <div {...args}>{children ?? 'Text'}</div>;
};

export default Card;
