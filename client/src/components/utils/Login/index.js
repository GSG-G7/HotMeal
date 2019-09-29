import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '../Button/index';
import background from '../../../assets/images/login.background.png';
import waiter from '../../../assets/images/waiter.png';
import './style.css';

export default class Login extends React.Component {
  state = {
    tableNumber: 1,
    secretNumber: 34,
  };

  setTableNumber = e => {
    this.setState({ tableNumber: e.target.value });
  };

  setSecretNumber = e => {
    this.setState({ secretNumber: e.target.value });
  };

  render() {
    const { tableNumber, secretNumber } = this.state;
    const handleSubmit = e => {
      e.preventDefault();
      fetch('/api/v1/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          table_number: tableNumber,
          secret_number: secretNumber,
        },
      });
    };
    return (
      <Router>
        <div>
          <img
            src={background}
            alt="backgroundImage"
            className="login__background--image"
          />
          <h1 className="login__title">HOTMEAL</h1>
          <img src={waiter} alt="waiterImage" className="login__waiter-image" />
          <form onSubmit={handleSubmit}>
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
              type="number"
              placeholder="Secret number"
              name="secret number"
              onChange={this.setSecretNumber}
            />
            <hr className="login__second-line" />
            <Link to="/">
              <Button type="submit" className="login__button" text="Enter" />
            </Link>
          </form>
        </div>
      </Router>
    );
  }
}
