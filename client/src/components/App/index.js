import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuPage from '../MealPage';
import DetailsPage from '../DetailsPage';
import Login from '../pages/Login/index';
import Feedback from '../feedback';
import Error404 from '../pages/Error404/index';
import ProtectedPage from '../Auth/Auth';
import Home from '../home';
import Order from '../Order/index';

import './style.css';

export default class App extends React.Component {
  state = {
    tableNumber: 0,
    orderMeals: [],
  };

  updateTableNumber = (tableNumber, redirect) => {
    this.setState({ tableNumber }, () => redirect('/'));
  };

  updateOrderMeals = newOrderMeals => {
    const { orderMeals } = this.state;
    this.setState({ orderMeals: orderMeals.concat(newOrderMeals) });
  };

  deleteOrder = () => {
    this.setState({ orderMeals: [] });
  };

  setOrderMeals = newMeals => {
    this.setState({ orderMeals: newMeals });
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
          <ProtectedPage
            exact
            path="/MyOrder"
            render={props => (
              <Order
                tableNumber={tableNumber}
                prevMeals={orderMeals}
                deleteOrder={this.deleteOrder}
                setOrderMeals={this.setOrderMeals}
                {...props}
              />
            )}
          />

          <ProtectedPage
            exact
            path="/details"
            render={props => (
              <DetailsPage
                updateOrderMeals={this.updateOrderMeals}
                {...props}
              />
            )}
          />
          <ProtectedPage
            exact
            path="/feedback"
            render={props => <Feedback tableNumber={tableNumber} {...props} />}
          />
          <ProtectedPage path="/meals" component={MenuPage} />
          <ProtectedPage path="/" component={Home} />
          <Route path="/serverError" render={<h1>Server Error :( </h1>} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}
