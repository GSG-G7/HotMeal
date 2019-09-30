import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from '../home';

import Feedback from '../feedback';
import './style.css';

export default () => (
  <div>
    <Router>
      {/* <Route path="/home" exact component={Home} /> */}
      <Route path="/" exact component={Feedback} />
    </Router>
  </div>
);
