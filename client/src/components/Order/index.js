import React from 'react';
import propTypes from 'prop-types';

import backArrow from '../../assets/images/backArrow.svg';
import cancel from '../../assets/images/ic-round-cancel.svg';
import Button from '../utils/Button/index';
import PopUp from '../utils/PopUp/index';
import './style.css';

export default class Order extends React.Component {
  state = {
    popUpSubmit: false,
    popUpError: false,
    submitted: false,
    totalPrice: 0,
    meals: [],
    //   {
    //     mealId: 1,
    //     amount: 2,
    //     price: 4.02,
    //     salt: 1,
    //     spices: 0,
    //     vegetables: ['t', 'b'],
    //   },

    //   {
    //     mealId: 3,
    //     vegetables: ['f', 'b'],
    //     fruits: ['f', 'b'],
    //     nuts: ['f', 'b'],
    //     sauce: 0,
    //     salt: 0,
    //     spices: 0,
    //     sugar: 0,
    //     amount: 2,
    //     price: 10,
    //   },
    //   {
    //     mealId: 2,
    //     vegetables: ['f', 'b'],
    //     fruits: ['f', 'b'],
    //     nuts: ['f', 'b'],
    //     sauce: 0,
    //     salt: 0,
    //     spices: 0,
    //     sugar: 0,
    //     amount: 1,
    //     price: 10,
    //   },
    // ],
  };

  componentWillUnmount = () => {
    const { submitted } = this.state;
    if (submitted) this.setState({ meals: [] });
    const { meals } = this.state;
    const { updateOrderMeals } = this.props;
    updateOrderMeals(meals);
  };

  componentDidMount = () => {
    this.addMeals();
  };

  addMeals = () => {
    // const { history } = this.props;
    const { prevMeals, meal } = this.props;
    const { meals } = this.state;
    // alert(JSON.stringify(prevMeals));
    // const {
    //   location: { state },
    // } = this.props;
    // if (!state) {
    //   history.push('/meals');
    //   return '';
    // }
    // const {
    //   location: {
    //     state: { meal },
    //   },
    //   prevMeals,
    // } = this.props;

    const updatedMeals = meals.concat(prevMeals);
    if (meal) updatedMeals.push(meal);
    this.setState({ meals: updatedMeals });

    return '';
  };

  updateTotalPrice = () => {
    const { meals } = this.state;
    if (meals.length) {
      const total = meals.reduce((result, meal) => {
        return result + meal.price;
      });
      this.setState({ totalPrice: total });
    }
  };

  ToggleStatus = () => {
    const { submitted } = this.state;
    this.setState({ submitted: !submitted });
  };

  onClickAdd = () => {
    const { history } = this.props;
    history.push('/meals');
  };

  onClickSubmit = () => {
    const { totalPrice, meals } = this.state;
    const { history, tableNumber, updateOrderMeals } = this.props;
    fetch('api/v1/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        createdAt: Date.now(),
        totalPrice,
        meals,
        tableNumber,
      }),
    })
      .then(res => {
        if (res.status === 201) {
          this.setState({ popUpSubmit: true });
          this.ToggleStatus();
          this.setState({ meals: [] });
          updateOrderMeals([]);
        }

        if (res.body.statusCode === 422) {
          this.setState({ popUpError: true });
        }
      })
      .catch(() => history.push('/serverError'));
  };

  showPopup = () => {
    const { popUpSubmit, popUpError } = this.state;
    const { history } = this.props;
    if (popUpSubmit) {
      return (
        <PopUp
          message="You order is submitted successfully"
          is2btnNeeded={false}
          btnName1="OK"
          onClick1={() => history.push('/')}
        />
      );
    }
    if (popUpError) {
      return (
        <PopUp
          message="The meal you chose is not exist"
          is2btnNeeded={false}
          btnName1="Retry"
          onClick1={() => history.push('/MyOrder')}
        />
      );
    }
    return null;
  };

  render() {
    const { totalPrice, meals } = this.state;

    return (
      <div>
        {this.showPopup()}
        <header className="header">
          <p>
            <img src={backArrow} alt="back" className="arrow" />
            <span className="p__my-order">My Order</span>
            <span className="p__cancel">Cancel</span>
          </p>
        </header>
        <div className="">
          <table>
            <tr>
              <th>Meal</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
            {meals.map(meal => {
              return (
                <tr key={meal.mealId}>
                  <td>{meal.name}</td>
                  <td>{meal.amount}</td>
                  <td>{meal.price}</td>
                  <img src={cancel} alt="cancel" />
                </tr>
              );
            })}
          </table>
          {this.updateTotalPrice}
          <span>Total= {totalPrice}</span>
        </div>
        <div className="order__button">
          <div>
            <Button type="button" className="" onClick={this.onClickAdd}>
              Add More
            </Button>
          </div>
          <div>
            <Button type="submit" className="" onClick={this.onClickSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
  history: propTypes.objectOf(propTypes.any).isRequired,
  // location: propTypes.objectOf(propTypes.any).isRequired,
  updateOrderMeals: propTypes.func.isRequired,
  prevMeals: propTypes.arrayOf(Object).isRequired,
  tableNumber: propTypes.number.isRequired,
  meal: propTypes.isRequired,
};
