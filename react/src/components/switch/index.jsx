import './index.css';

const Switch = ({ ...args }) => {
  return (
    <div {...args} className="wrapper">
      <input type="checkbox" id="switch" hidden />
      <label for="switch" className="label">
        <span className="toggle"></span>
      </label>
    </div>
  );
};

export default Switch;
