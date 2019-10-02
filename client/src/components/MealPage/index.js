import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MealList from './MealList';
import Category from './Category';

import './style.css';

class MenuPage extends React.Component {
  state = {
    showMenu: true,
    category: 'main',
    data: [],
  };

  componentDidMount() {
    const { category } = this.state;
    this.fetchMeals(category);
  }

  fetchMeals = category => {
    const { history } = this.props;
    this.setState({ category });
    fetch(`/api/v1/meals?category=${category}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result.data,
        });
      })
      .then(this.changeStateCat())
      .catch(() => history.push('/serverError'));
  };

  changeStateCat = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu,
    });
  };

  renderCategory = () => {
    const { showMenu } = this.state;

    if (showMenu) {
      return (
        <div className="categoryList">
          <Category fetchMeals={this.fetchMeals} />
        </div>
      );
    }
    return null;
  };

  Header = () => {
    const { category } = this.state;

    return (
      <header className="header">
        <nav className="nav">
          <ul className="header__nav">
            <li className="nav_item">
              <Link to="/">
                <i className="white fas fa-arrow-left"></i>
              </Link>
            </li>

            <li className=" nav_item categoryName">{category}</li>
            <li className="nav_item">
              <i
                tabIndex={0}
                onClick={() => this.changeStateCat()}
                role="button"
                onKeyPress={key => key}
                className="white fas fa-chevron-circle-down"
              ></i>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <div className="mealList">
        <this.Header />
        {this.renderCategory()}
        <MealList data={data} />
        <span className="float">
          <i className="fa fa-plus my-float"></i>
        </span>
      </div>
    );
  }
}
MenuPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default MenuPage;
