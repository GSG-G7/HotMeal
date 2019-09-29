import React from 'react';
import './style.css';

const Category = () => {
  return (
    <div className="category">
      <div className="category_menu">
        <button type="button" className="category_icon">
          Desserts
        </button>
        <button type="button" className="category_icon">
          Sandwishes
        </button>
        <button type="button" className="category_icon">
          Drinks
        </button>
        <button type="button" className="category_icon">
          Main
        </button>
        <button type="button" className="category_icon">
          Breakfast
        </button>
      </div>
    </div>
  );
};

export default Category;
