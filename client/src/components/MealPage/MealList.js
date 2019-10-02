import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardMeal from './CardMeal';

import './style.css';

const MealList = ({ data }) => {
  const listItems = data.map(item => {
    return (
      <Link
        className="link"
        to={{
          pathname: '/details',
          state: { item },
        }}
      >
        <li>
          <CardMeal key={item.id} oneMeal={item} />
        </li>
      </Link>
    );
  });
  return <ul className="menu">{listItems}</ul>;
};
MealList.propTypes = {
  data: PropTypes.isRequired,
};
export default MealList;
