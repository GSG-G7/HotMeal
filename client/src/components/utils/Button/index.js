import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Button({
  className = '',
  onClick = undefined,
  children,
}) {
  return (
    <button
      type="button"
      className={`common-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  onClick: undefined,
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
