import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Button({ className, children }) {
  return (
    <button type="button" className={`button ${className}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
