import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import Button from '../Button';

function PopUp({ message, is2btnNeeded, onClick1, onClick2, children }) {
  if (is2btnNeeded) {
    return (
      <div className="popup-background">
        <div className="popup">
          <div className="popup-img-container" />
          <p className="popup-text"> {message} </p>
          <div className="popup-btncontainer">
            <Button type="submit" className="popup-2btns" onClick={onClick1}>
              {children}
            </Button>
            <Button type="button" className="popup-2btns" onClick={onClick2}>
              {children}
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
        <Button type="submit" className="popup-button" onClick={onClick1}>
          {children}
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
  children: propTypes.string.isRequired,
};

PopUp.defaultProps = {
  onClick2: undefined,
};
export default PopUp;
