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
    tableNumber: 2,
    orderMeals: [
      {
        id: 1,
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
          <ProtectedPage
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
          <ProtectedPage exact path="/feedback" component={Feedback} />
          <ProtectedPage path="/meals" component={MenuPage} />
          <ProtectedPage path="/" component={Home} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}
