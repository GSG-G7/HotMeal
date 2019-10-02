import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from '../utils/Error404/index';
import Order from '../Order/index';
import './style.css';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/MyOrder" component={Order} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
};
