import './index.css';

const Tag = ({ type, icon, label, ...args }) => {
  return type === 'add' ? (
    <div {...args}>
      <img src="" alt="plus" />
      <span>{label}</span>
    </div>
  ) : (
    <div {...args}>
      {icon && <img src="" alt="icon" />}
      <span>{label}</span>
    </div>
  );
};

export default Tag;
