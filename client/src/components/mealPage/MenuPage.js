import React from 'react';
import PropTypes from 'prop-types';
import MealList from '.';
import srcImg from '../../assets/screen-0.jpg';
import Category from './Category';
import './style.css';

class MenuPage extends React.Component {
  state = {
    showMenu: false,
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
          <Category />
        </div>
      );
    }
    return null;
  };

  Header = () => {
    const { category } = this.props;

    return (
      <header className="header">
        <nav className="nav">
          <ul className="header__nav">
            <li>
              <i className="fas fa-arrow-left"></i>
            </li>
            <li className="categoryName">{category}</li>
            <li>
              <i
                tabIndex={0}
                onClick={() => this.changeStateCat()}
                role="button"
                onKeyPress={key => key}
                className="fas fa-chevron-circle-down"
              ></i>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  render() {
    return (
      <div className="mealList">
        <this.Header />
        {this.renderCategory()}
        <MealList
          data={[
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
            {
              img: srcImg,
              name: 'Shrimp Pasta',
              shortDesc:
                'Lorem ipsum dolor site, amet consectetur adipisicing elit',
              price: '25 NIS',
            },
          ]}
        />
        <span className="float">
          <i className="fa fa-plus my-float"></i>
        </span>
      </div>
    );
  }
}
MenuPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default MenuPage;
