import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Category = ({ fetchMeals }) => {
  return (
    <div className="category">
      <ul className="category_menu">
        <li>
          <i
            className="category_icon white fas fa-turkey"
            tabIndex={0}
            onClick={() => fetchMeals('Desserts')}
            role="button"
            onKeyPress={key => key}
          >
            Desserts
          </i>
        </li>
        <li>
          <i
            className="category_icon white fas fa-turkey"
            tabIndex={0}
            onClick={() => fetchMeals('Breakfast')}
            role="button"
            onKeyPress={key => key}
          >
            Breakfast
          </i>
        </li>
        <li>
          <i
            className="category_icon white fas fa-turkey"
            tabIndex={0}
            onClick={() => fetchMeals('Drinks')}
            role="button"
            onKeyPress={key => key}
          >
            Drinks
          </i>
        </li>
        <li>
          <i
            className="category_icon white fas fa-turkey"
            tabIndex={0}
            onClick={() => fetchMeals('Sandwishes')}
            role="button"
            onKeyPress={key => key}
          >
            Sandwishes
          </i>
        </li>
        <li>
          <i
            className="category_icon white fas fa-turkey"
            tabIndex={0}
            onClick={() => fetchMeals('Main')}
            role="button"
            onKeyPress={key => key}
          >
            Main
          </i>
        </li>
      </ul>
    </div>
  );
};
Category.propTypes = {
  fetchMeals: PropTypes.func.isRequired,
};
export default Category;
