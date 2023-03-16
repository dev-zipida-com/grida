import './index.css';

const ReplyEditor = ({ icon, ...args }) => {
  return (
    <div {...args}>
      <div>
        <img src="" alt="profile" />
        <textarea />
      </div>
      <div>
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ReplyEditor;
