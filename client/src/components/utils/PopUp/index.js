import React from 'react';
import propTypes from 'prop-types';
import './style.css';
// import img from '../../../assets/images/popupImg.png';
// import imgSVG from '../../../assets/images/popupimg.svg';
// import Button from '../../utils/Button/index';

function PopUp({ message, is2btnNeeded }) {
  if (is2btnNeeded) {
    return (
      <div className="popup-background">
        <div className="popup">
          <div className="popup-img-container" />
          <p className="popup-text"> {message} </p>
          <div className="popup-btncontainer">
            <button type="submit" className="popup-2btns">
              confirm
            </button>
            <button type="submit" className="popup-2btns">
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-background">
      <div className="popup">
        <div className="popup-img-container" />
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
  is2btnNeeded: propTypes.bool.isRequired,
};
export default PopUp;
