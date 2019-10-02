/* eslint-disable react/no-unused-state */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/index';
import Error404 from '../pages/Error404/index';
import './style.css';

export default class App extends React.Component {
  state = {
    tableNumber: null,
  };

  updateTableNumber = (tableNumber, redirect) => {
    this.setState({ tableNumber }, () => redirect('/'));
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <Login updateTableNumber={this.updateTableNumber} {...props} />
            )}
          />
          <Route exact path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}
