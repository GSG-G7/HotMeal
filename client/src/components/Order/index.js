import React from 'react';
import propsType from 'prop-types';

import backArrow from '../../assets/images/backArrow.svg';
import cancel from '../../assets/images/ic-round-cancel.svg';
import Button from '../utils/Button';
import PopUp from '../utils/'
// import MenuPage from '../mealPage/MenuPage';

export default class Order extends React.Component {
  state = {
    submitted: false,
    totalPrice: 0,
    orderID: 1,
    meals: [{}],
  };

  setOrderID = id => {
    this.setState({ orderID: id });
  };

  AddMeal = () => {
    const { meals } = this.state;
    const meal = this.props;
    meals.push(meal);
    this.setState({ meals });
  };

  updateTotalPrice = () => {
    const { meals } = this.state;
    const total = meals.reduce((result, meal) => {
      return result + meal.price;
    });
    this.setState({ totalPrice: total });
  };

  ToggleStatus = () => {
    const { submitted } = this.state;
    this.setState({ submitted: !submitted });
  };

  // testCookie = () => {
  //   return (
  //     parseInt(
  //       document.cookie.replace(
  //         // eslint-disable-next-line no-useless-escape
  //         /(?:(?:^|.*;\s*)tableNumber\s*\=\s*([^;]*).*$)|^.*$/,
  //         '$1'
  //       ),
  //       10
  //     ) + 4
  //   );
  // };

  onClickAdd = () => {
    // return <MenuPage />;
  };

  onClickSubmit = () => {
    const { totalPrice, meals } = this.state;
    fetch('/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        createdAt: Date.now(),
        totalPrice,
        meals,
        tableNumber: 12,
      }),
    }).then(res => {if(res.status===200)
                 
    
    });
  };

  render() {
    const { totalPrice, meals } = this.state;

    return (
      <div>
        <header>
          <p>
            <img src={backArrow} alt="back" />
            <span>My Order</span>
            <span>Cancel</span>
          </p>
        </header>
        <table>
          <tr>
            <th>Meal</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
          {meals.map(meal => {
            return (
              <tr key={meal.id}>
                <td>{meal.name}</td>
                <td>{meal.amount}</td>
                <td>{meal.price}</td>
                <img src={cancel} alt="cancel" />
              </tr>
            );
          })}
        </table>
        <span>Total= {totalPrice}</span>
        <Button type="button" className="" onClick={this.onClickAdd}>
          Add More
        </Button>
        <Button type="submit" className="" onClick={this.onClickSubmit}>
          Submit
        </Button>
        <span>{this.testCookie()}</span>
      </div>
    );
  }
}

Order.propsType = {
  meal: propsType.object.isRequired,
};
