import React from 'react';
import MenuPage from '../mealPage/MenuPage';
import './style.css';

const App = () => {
  return (
    <div className="app">
      <MenuPage category="Main Meals" />
    </div>
  );
};

export default App;
