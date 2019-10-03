/* eslint-disable react/no-unused-state */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from '../pages/Error404';
import Login from '../pages/Login/index';
import Order from '../Order/index';
import './style.css';

export default class App extends React.Component {
  state = {
    tableNumber: 2,
    orderMeals: [
      {
        mealId: 1,
        amount: 2,
        price: 4.02,
        salt: 1,
        spices: 0,
        vegetables: ['t', 'b'],
      },
    ],
  };

  updateTableNumber = (tableNumber, redirect) => {
    this.setState({ tableNumber }, () => redirect('/'));
  };

  updateOrderMeals = orderMeals => {
    this.setState({ orderMeals });
  };

  render() {
    const { tableNumber, orderMeals } = this.state;
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
          <Route
            exact
            path="/MyOrder"
            render={props => (
              <Order
                updateOrderMeals={this.updateOrderMeals}
                tableNumber={tableNumber}
                prevMeals={orderMeals}
                {...props}
              />
            )}
          />

          <Route exact path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}
