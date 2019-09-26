import React from 'react';
import Button from '../Button/index';
import background from '../../../assets/images/login.background.png';
import waiter from '../../../assets/images/waiter.png';
import './style.css';

export default () => {
  return (
    <div>
      <img
        src={background}
        alt="backgroundImage"
        className="background-image"
      />
      <img src={waiter} alt="waiterImage" className="waiter-image" />
      <h1 className="title">HOTMEAL</h1>
      <p className="table-number">Table number</p>
      <hr className="first-line" />
      <p className="secret-number">Secret number</p>
      <hr className="second-line" />
      <Button className="login-button" />
    </div>
  );
};
