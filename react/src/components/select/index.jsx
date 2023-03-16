import './index.css';

const Select = ({ options, ...args }) => {
  return (
    <select {...args}>
      {options?.map((option) => {
        return <option value={option.value}>{option.name}</option>;
      })}
    </select>
  );
};

export default Select;

/* 참고
1. Select -> box, text
2. Select Menu
3. Dropdown with Label
4. Cascader
5. Auto Complete
*/
