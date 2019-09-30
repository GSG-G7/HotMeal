import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../../assets/images/error.jpg';
import Button from '../Button/index';
import './style.css';

const Error404 = () => {
  return (
    <div>
      <img className="error404__image" src={error404} alt="error-img" />
      <Link to="/">
        <Button type="button" className="error404__button">
          Go Back
        </Button>
      </Link>
    </div>
  );
};
export default Error404;
