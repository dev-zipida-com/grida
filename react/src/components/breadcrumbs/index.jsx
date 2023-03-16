import './index.css';

const Breadcrumbs = ({ routes, icon, ...args }) => {
  return (
    <div {...args}>
      {routes?.map((route, index) => {
        if (icon && index === 0) {
          return (
            <div key={index}>
              <img src="" alt="home" />
              <a key={index} herf={route.path}>
                {route.name}
              </a>
            </div>
          );
        }
        return (
          <div key={index}>
            <a herf={route.path}>{route.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
