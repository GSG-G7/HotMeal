import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class Auth extends React.Component {
  state = {
    IsRedirect: false,
    logedIn: false,
  };

  componentWillMount() {
    const { history } = this.props;
    fetch('api/v1/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) this.setState({ IsRedirect: true, logedIn: false });
        else this.setState({ IsRedirect: true, logedIn: true });
      })
      .catch(() => history.push('/serverError'));
  }

  redirectTo = () => {
    const { component: Component, ...rest } = this.props;
    const { IsRedirect, logedIn } = this.state;
    if (IsRedirect) {
      return !logedIn ? (
        <Redirect to="/login" />
      ) : (
        <Route {...rest} component={Component} />
      );
    }
    return '';
  };

  render() {
    return <div>{this.redirectTo()}</div>;
  }
}
