import React from 'react';
import Button from '../Button/index';
import background from '../../../assets/images/login.background.png';
import waiter from '../../../assets/images/waiter.png';
import './style.css';

export default class Login extends React.Component {
  state = {
    tableNumber: 1,
    secretNumber: 23,
  };

  setTableNumber = event => {
    this.setState({ tableNumber: event.target.value });
  };

  setSecretNumber = event => {
    this.setState({ secretNumber: event.target.value });
  };

  render() {
    const { tableNumber, secretNumber } = this.state;
    return (
      <div>
        <img
          src={background}
          alt="backgroundImage"
          className="login__background--image"
        />
        <img src={waiter} alt="waiterImage" className="login__waiter-image" />
        <h1 className="login__title">HOTMEAL</h1>
        <h5 className="login__table-number">Table name</h5>
        <input
          className="login__first-input"
          type="number"
          placeholder="Table number"
          name="table number"
          value={tableNumber}
          onChange={this.setTableNumber}
        />
        <h5 className="login__secret-number">Secret number</h5>
        <input
          className="login__second-input"
          type="number"
          placeholder="Secret number"
          name="secret number"
          value={secretNumber}
          onChange={this.setSecretNumber}
        />
        <Button className="login__button" text="Enter" />
      </div>
    );
  }
}
