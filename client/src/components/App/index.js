import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuPage from '../MealPage';
import Error404 from '../utils/Error404/index';
import './style.css';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/meals" component={MenuPage} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
};
