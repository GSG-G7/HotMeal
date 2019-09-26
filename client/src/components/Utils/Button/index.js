import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Button({ className, text }) {
  return (
    <button type="button" className={`button ${className}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
