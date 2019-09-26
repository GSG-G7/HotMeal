import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Button({ className }) {
  return (
    <button type="button" className={`button ${className}`}>
      Enter
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
};
