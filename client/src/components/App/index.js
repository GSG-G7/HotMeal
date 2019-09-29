import React from 'react';
import PropTypes from 'prop-types';

import MealList from '../mealPage';
import srcImg from '../../assets/screen-0.jpg';
import './style.css';

const App = ({ category }) => (
  <div className="app">
    <header className="header">
      <nav className="nav">
        <ul className="header__nav">
          <li>
            <i className="fas fa-arrow-left"></i>
          </li>
          <li className="category">{category}</li>
          <li>
            <i className="fas fa-chevron-circle-down"></i>
          </li>
        </ul>
      </nav>
    </header>
    <MealList
      data={[
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
        {
          img: srcImg,
          name: 'Shrimp Pasta',
          shortDesc:
            'Lorem ipsum dolor site, amet consectetur adipisicing elit',
          price: '25 NIS',
        },
      ]}
    />
    <span className="float">
      <i className="fa fa-plus my-float"></i>
    </span>
  </div>
);
App.propTypes = {
  category: PropTypes.string.isRequired,
};
export default App;
