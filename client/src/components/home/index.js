import React, { Component } from 'react';

import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from './slider/slider';
import Button from '../utils/Button';
import Pop from '../utils/PopUp';
import './style.css';

class Home extends Component {
  state = {
    logoutComp: null,
    callWaiter: null,
  };

  logoutPop = () => {
    const { logoutComp } = this.state;
    const { history } = this.props;
    if (logoutComp) {
      return (
        <Pop
          is2btnNeeded={false}
          btnName1="Login"
          message="You are loged out now"
          onClick1={() => history.push('/login')}
        />
      );
    }
    return '';
  };

  waiterPop = () => {
    const { callWaiter } = this.state;
    if (callWaiter) {
      return (
        <Pop
          is2btnNeeded={false}
          btnName1="Ok"
          message="The waiter is coming"
          onClick1={() => this.setState({ callWaiter: null })}
        />
      );
    }
    return '';
  };

  render() {
    const { history } = this.props;
    const {
      location: { pathname },
    } = this.props;
    const orderId = Number(pathname.slice(1));
    const logout = () => {
      fetch('/api/v1/logout')
        .then(res => res.json())
        .then(payload => {
          return payload.statusCode === 200
            ? this.setState({ logoutComp: true })
            : '';
        });
    };
    return (
      <div className="bage">
        {this.logoutPop()}
        {this.waiterPop()}

        <Slider />
        <div className="bage__buttons">
          <div>
            <Button
              className="bage__buttons_button"
              onClick={() => history.push('/meals')}
            >
              meals
            </Button>
          </div>
          <div>
            <Button
              className="bage__buttons_button"
              onClick={() => this.setState({ callWaiter: true })}
            >
              Waiter
            </Button>
          </div>
          <div>
            <Link
              to={{
                pathname: '/feedback',
                state: {
                  orderId,
                },
              }}
            >
              <Button className="bage__buttons_button">Feedback</Button>
            </Link>
          </div>
          <div>
            <Button className="logout bage__buttons_button" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: propTypes.objectOf(propTypes.any).isRequired,
  location: propTypes.objectOf(propTypes.any).isRequired,
};

export default Home;
