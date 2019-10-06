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
    popUpCancel: false,
    submitted: false,
    orderId: null,
    meals: [],
  };

  componentDidMount = () => {
    this.addMeals();
  };

  componentWillUnmount = () => {
    const { setOrderMeals } = this.props;
    const { meals } = this.state;
    setOrderMeals(meals);
  };

  addMeals = () => {
    const { prevMeals } = this.props;
    this.setState({ meals: prevMeals });
  };

  updateTotalPrice = meals => {
    if (meals.length) {
      const total = meals.reduce((sum, meal) => {
        return sum + meal.price * meal.amount;
      }, 0);
      return total;
    }
    return null;
  };

  ToggleStatus = () => {
    const { submitted } = this.state;
    this.setState({ submitted: !submitted });
  };

  removeMeal = key => {
    const { meals } = this.state;
    this.setState({
      meals: meals.filter(el => el.id !== key),
    });
  };

  onClickAdd = () => {
    const { history } = this.props;
    history.push('/meals');
  };

  onClickSubmit = () => {
    const { meals } = this.state;
    const { history, tableNumber, deleteOrder, prevMeals } = this.props;

    fetch('api/v1/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        createdAt: Date.now(),
        totalPrice: this.updateTotalPrice(prevMeals),
        meals,
        tableNumber,
      }),
    })
      .then(res => res.json())
      .then(res1 => {
        if (res1.statusCode === 201) {
          this.setState({ popUpSubmit: true });
          this.ToggleStatus();
          this.setState({ meals: [], orderId: res1.data.orderId });
          deleteOrder();
        }
        if (res1.statusCode === 422) {
          this.setState({ popUpError: true });
        }
      })
      .catch(() => {
        history.push('/serverError');
      });
  };

  showPopup = () => {
    const { popUpSubmit, popUpError, orderId, popUpCancel } = this.state;
    const { history, deleteOrder } = this.props;
    if (popUpSubmit) {
      return (
        <PopUp
          message="You order is submitted successfully"
          is2btnNeeded={false}
          btnName1="OK"
          onClick1={() => history.push(`/${orderId}`)}
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
    if (popUpCancel) {
      return (
        <PopUp
          message="You will cancel the whole order, are you sure?"
          is2btnNeeded
          btnName1="Yes"
          btnName2="back"
          onClick1={() => {
            deleteOrder();
            return history.push('/');
          }}
          onClick2={() => this.setState({ popUpCancel: false })}
        />
      );
    }

    return null;
  };

  render() {
    const { history, prevMeals } = this.props;
    const { meals } = this.state;

    return (
      <div>
        {this.showPopup()}
        <header className="header">
          <div
            role="button"
            tabIndex={0}
            onClick={() => history.push('/meals')}
            onKeyDown={k => k}
          >
            <img src={backArrow} alt="back" className="arrow" />
          </div>
          <div>
            <span className="p__my-order">My Order</span>
          </div>
          <div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => this.setState({ popUpCancel: true })}
              onKeyDown={k => k}
            >
              <span className="p__cancel">Cancel</span>
            </div>
          </div>
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
                <tr key={meal.id}>
                  <td>{meal.name}</td>
                  <td>{meal.amount}</td>
                  <td>{meal.price}</td>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      this.removeMeal(meal.id);
                    }}
                    onKeyDown={k => k}
                  >
                    <img src={cancel} alt="cancel" />
                  </div>
                </tr>
              );
            })}
          </table>
          <span>Total= {this.updateTotalPrice(prevMeals)} NIS</span>
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
  deleteOrder: propTypes.func.isRequired,
  setOrderMeals: propTypes.func.isRequired,
  tableNumber: propTypes.number.isRequired,
  prevMeals: propTypes.arrayOf(Object).isRequired,
};
