import React from 'react';
import PropTypes from 'prop-types';
import yaml from 'js-yaml';
import './index.css';
import defaultProps from './button.yaml';

const defaultPropValues = yaml.load(defaultProps);

const Button = (props) => {
  const { type, onClick, disabled, children, ...args } = props;
  const buttonClass = `grida-button ${type}`;
  const buttonTextClass = `grida-button-text ${type}`;

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...args}
    >
      <span className={buttonTextClass}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = defaultPropValues;

export default Button;
