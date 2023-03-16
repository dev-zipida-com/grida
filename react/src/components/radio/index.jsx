import './index.css';

const Radio = ({ label, value, ...args }) => {
  return (
    <input {...args} type="radio" value={value}>
      {label}
    </input>
  );
};

export default Radio;

/* 참고 
1. Radio
2. Radio Group
3. Radio Button
*/
