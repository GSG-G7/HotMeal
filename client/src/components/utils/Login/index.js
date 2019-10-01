import React from 'react';
import propTypes from 'prop-types';
import logInSchema from '../../../validation/login';
import Button from '../Button/index';
import background from '../../../assets/images/login.background.png';
import waiter from '../../../assets/images/waiter.png';
import './style.css';

export default class Login extends React.Component {
  state = {
    tableNumber: null,
    secret: '',
    err: null,
  };

  setTableNumber = e => {
    this.setState({ tableNumber: e.target.value });
  };

  setSecret = e => {
    this.setState({ secret: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { tableNumber, secret } = this.state;
    const { history, updateTableNumber } = this.props;
    logInSchema
      .validateAsync({ tableNumber, secret })
      .then(() => {
        return fetch('/api/v1/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tableNumber,
            secret,
          }),
        });
      })
      .then(res => {
        if (res.status === 200) {
          updateTableNumber(tableNumber);
          history.push('/');
        }
        return this.setState({ err: 'Incorrect Table Number or Secret' });
      })
      .catch(err => {
        if (err.details) {
          if (err.details[0].message) {
            this.setState({ err: err.details[0].message });
          }
        } else {
          this.setState({ err: 'Internal Server Error' });
        }
      });
  };

  render() {
    const { tableNumber, secret, err } = this.state;
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
            placeholder="Table number"
            name="tableNumber"
            onChange={this.setTableNumber}
          />
          <hr className="login__first-line" />
          <input
            value={secret}
            className="login__secret-number"
            type="password"
            placeholder="Secret key"
            name="secret"
            onChange={this.setSecret}
          />
          <hr className="login__second-line" />
          <Button type="submit" className="login__button">
            Enter
          </Button>
        </form>
        <p className="login__err-message">{err}</p>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.isRequired,
  updateTableNumber: propTypes.func.isRequired,
};
