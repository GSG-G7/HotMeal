import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({
  type = 'button',
  className = '',
  onClick = undefined,
  children,
}) => {
  return type === 'submit' ? (
    <button
      type="submit"
      className={`common-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button
      type="button"
      className={`common-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  onClick: undefined,
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Button;
