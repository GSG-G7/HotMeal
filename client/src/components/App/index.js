import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feedback from '../feedback';
// import Home from '../home';
import Error404 from '../utils/Error404/index';
import './style.css';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/feedback" component={Feedback} />
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="*" component={Error404} />
    </Switch>
  </Router>
);
