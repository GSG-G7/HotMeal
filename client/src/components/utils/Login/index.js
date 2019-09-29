import React from 'react';
import Button from '../Button/index';
import background from '../../../assets/images/login.background.png';
import waiter from '../../../assets/images/waiter.png';
import './style.css';

export default class Login extends React.Component {
  state = {
    tableNumber: '',
    secretNumber: '',
  };

  setTableNumber = e => {
    this.setState({ tableNumber: e.target.value });
  };

  setSecretNumber = e => {
    this.setState({ secretNumber: e.target.value });
  };

  handleSubmit = e => {
    console.log('alaa');
    e.preventDefault();
    fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        table_number: this.tableNumber,
        secret_number: this.secretNumber,
      }),
    })
      .then(res => res.json())
      .catch(err => console.log(`err ${err}`));
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
        <h1 className="login__title">HOTMEAL</h1>
        <img src={waiter} alt="waiterImage" className="login__waiter-image" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={tableNumber}
            className="login__table-number"
            type="number"
            placeholder="Table number"
            name="table number"
            onChange={this.setTableNumber}
          />
          <hr className="login__first-line" />
          <input
            value={secretNumber}
            className="login__secret-number"
            type="text"
            placeholder="Secret number"
            name="secret number"
            onChange={this.setSecretNumber}
          />
          <hr className="login__second-line" />
          <Button type="submit" className="login__button"></Button>
        </form>
      </div>
    );
  }
}
