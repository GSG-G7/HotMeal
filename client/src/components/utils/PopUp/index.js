import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import Button from '../Button';

function PopUp({
  message,
  is2btnNeeded,
  btnName1,
  btnName2,
  onClick1,
  onClick2,
}) {
  if (is2btnNeeded) {
    return (
      <div className="popup-background">
        <div className="popup">
          <div className="popup-img-container" />
          <p className="popup-text"> {message} </p>
          <div className="popup-btncontainer">
            <Button type="button" className="popup-2btns" onClick={onClick1}>
              {btnName1}
            </Button>
            <Button type="button" className="popup-2btns" onClick={onClick2}>
              {btnName2}
            </Button>
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
        <Button type="button" className="popup-button" onClick={onClick1}>
          {btnName1}
        </Button>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  message: propTypes.string.isRequired,
  is2btnNeeded: propTypes.bool.isRequired,
  onClick1: propTypes.func.isRequired,
  onClick2: propTypes.func,
  btnName1: propTypes.string.isRequired,
  btnName2: propTypes.string,
};

PopUp.defaultProps = {
  onClick2: undefined,
  btnName2: undefined,
};
export default PopUp;
