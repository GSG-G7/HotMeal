import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactStars from 'react-stars';
import './style.css';
import Button from '../utils/Button';

export default class feedback extends Component {
  state = {
    rate: 2.5,
  };

  newRate = newR => {
    this.setState({ rate: newR });
  };

  render() {
    const { rate } = this.state;
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
          <form>
            <input type="text" className="email" placeholder="Email" />

            <textarea
              className="feedback"
              placeholder="We are looking forward to hearing from you "
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
              <Button className="button">Send</Button>
            </div>
            <div className="div-button">
              <Button className="button">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
