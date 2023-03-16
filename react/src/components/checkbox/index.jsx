import './index.css';

const Checkbox = ({ label, name, ...args }) => {
  return (
    <div>
      {label && <label for={name}>{label}</label>}
      <input {...args} id={name} type="checkbox" />
    </div>
  );
};

export default Checkbox;
