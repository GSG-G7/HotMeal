import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './style.css';

// eslint-disable-next-line react/prop-types
export default ({ oneMeal: { img, name, shortDesc, price } }) => (
  <div className="meal ">
    <img className="meal__img" src={img} alt="food" />
    <div className="meal__desc">
      <h4 className="meal__name">{name}</h4>
      <p className="meal__shorDesc">{shortDesc}</p>
    </div>

    <div className="meal__icon">
      <i className="fas fa-angle-right"></i>
      <span className="meal__price">{price}</span>
    </div>
  </div>
);
