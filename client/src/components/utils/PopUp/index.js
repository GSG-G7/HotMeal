import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import img from '../../../assets/images/popupImg.png';
// import Button from '../../utils/Button/index';

function PopUp({ message }) {
  return (
    <div className="popup-background">
      <div className="popup">
        <img src={img} alt="food" className="popup-img" />
        <p className="popup-text"> {message} </p>
        <button type="submit" className="popup-button">
          submit
        </button>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  message: propTypes.string.isRequired,
};
export default PopUp;
