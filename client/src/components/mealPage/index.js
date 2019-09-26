import React from 'react';
import './style.css';
import srcImg from '../../assets/screen-0.jpg';

const CardMeal = () => (
  <div className="meal ">
    <img className="meal__img" src={srcImg} alt="food" />
    <div className="meal__desc">
      <h4 className="meal__name">Shrimp Pizza</h4>
      <p className="meal__shorDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </div>

    <div className="meal__icon">
      <i className="fas fa-angle-right"></i>
      <span className="meal__price">25 NIS</span>
    </div>
  </div>
);
export default () => (
  <div>
    <CardMeal />
  </div>
);
