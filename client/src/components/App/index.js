import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from '../utils/Error404/index';
import './style.css';
import Home from '../home';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
};
