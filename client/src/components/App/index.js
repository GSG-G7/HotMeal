import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../utils/Login/index';
import Error404 from '../utils/Error404/index';
import './style.css';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
};
