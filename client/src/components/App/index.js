/* eslint-disable react/no-unused-state */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../utils/Login/index';
import Error404 from '../utils/Error404/index';
import './style.css';

export default class App extends React.Component {
  state = {
    tableNumber: null,
  };

  updateTableNumber = e => {
    this.setState({ tableNumber: e });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            component={props => (
              <Login updateTableNumber={this.updateTableNumber} {...props} />
            )}
          />
          <Route exact path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}
