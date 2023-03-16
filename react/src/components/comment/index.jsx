import './index.css';

const Comment = ({ title, content, icon, ...args }) => {
  return (
    <div {...args}>
      <div>
        <img src="" alt="profile" />
        <div>
          <p>{title}</p>
          <p>{content}</p>
        </div>
      </div>
      <div>
        <button>up</button>
        <button>down</button>
        <button>reply</button>
      </div>
    </div>
  );
};

export default Comment;
