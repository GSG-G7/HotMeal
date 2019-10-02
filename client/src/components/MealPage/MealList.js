import React from 'react';
import PropTypes from 'prop-types';
import CardMeal from './CardMeal';
import './style.css';

const MealList = ({ data }) => {
  const listItems = data.map(item => {
    return (
      <li>
        <CardMeal oneMeal={item} />
      </li>
    );
  });
  return <ul className="menu">{listItems}</ul>;
};
MealList.propTypes = {
  data: PropTypes.isRequired,
};
export default MealList;
