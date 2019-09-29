import React from 'react';
import error404 from '../../../assets/images/error.jpg';
import Button from '../Button/index';
import './style.css';

const Error404 = () => {
  return (
    <div>
      <img className="error404__image" src={error404} alt="error-img" />
      <Button type="button" className="error404__button">
        Go Back
      </Button>
    </div>
  );
};
export default Error404;
