import React, { Component } from 'react';
import ReactStars from 'react-stars';
import './style.css';
import Button from '../utils/Button';
export default class feedback extends Component {
  state = {
    rate:2.5,
  }
  stars = (num) => {
    this.star = '';
    for (let i = 0; i < num; i++) this.star += `<i className='star${i} fas fa-star'></i>`
    return this.star;
  }
  newRate = (newR) => {
    this.setState({rate: newR})
  }
  render() {
    return (
      <div className="bg" >
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
        <form >
          <input type="text" className="email" placeholder="Email" />

          <textarea  className="feedback" placeholder="We are looking forward to hearing from you ">
            
          </textarea>

        </form>
        <div className="container_star">
          <ReactStars value={this.state.rate} count={5} onChange={this.newRate} size={24} color2={'#F5C518'}/>
        </div>
        <div className="All">
          <div className="div-button">
            <Button className="button" children="Send"/>
          </div>
          <div className="div-button">
            <Button className="button" children="Cancel"/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
