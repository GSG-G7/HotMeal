import React, { Component } from 'react';
import ReactStars from 'react-stars';
import propTypes from 'prop-types';
import './style.css';
import Button from '../utils/Button';

export default class FeedbackComponent extends Component {
  state = {
    rate: 2.5,
    email: '',
    content: '',
    errorMessage: '',
  };

  setFeedback = event => this.setState({ content: event.target.value });

  setEmail = event => this.setState({ email: event.target.value });

  newRate = newR => this.setState({ rate: newR });

  sendFeedback = () => {
    const { history, orderId = 1 } = this.props;
    const { email, content: feedback } = this.state;
    const data = {
      orderId,
      email,
      feedback,
    };
    fetch('/api/v1/post-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(payload => {
        return payload.statusCode === 201
          ? history.push('/home')
          : this.setState({ errorMessage: payload.error });
      })
      .catch(err => this.setState({ errorMessage: err }));
  };

  render() {
    const { history } = this.props;
    const { rate, errorMessage } = this.state;
    return (
      <div className="bg">
        <div className="card">
          <h3 className="header-feedback"> feedback</h3>
          <div className="order-info">
            <div className="order-number">
              <p> 23</p>
              <h4>Order</h4>
            </div>
            <div className="table-number">
              <p>5</p>
              <h4>Table</h4>
            </div>
          </div>
          <div className="error">{errorMessage}</div>
          <form>
            <input
              type="text"
              onChange={this.setEmail}
              className="email"
              placeholder="Email"
            />

            <textarea
              className="feedback"
              onChange={this.setFeedback}
              placeholder="We are looking forward to hearing from you"
            ></textarea>
          </form>
          <div className="container_star">
            <ReactStars
              value={rate}
              count={5}
              onChange={this.newRate}
              size={24}
              color2="#F5C518"
            />
          </div>
          <div className="All">
            <div className="div-button">
              <Button className="button" onClick={this.sendFeedback}>
                Send
              </Button>
            </div>
            <div className="div-button">
              <Button className="button" onClick={() => history.push('/home')}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
FeedbackComponent.propTypes = {
  history: propTypes.string.isRequired,
  orderId: propTypes.number.isRequired,
};
