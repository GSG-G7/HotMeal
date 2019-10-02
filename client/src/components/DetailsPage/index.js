import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../utils/Button';
import './style.css';

const Details = ({
  location: {
    state: { item },
  },
}) => {
  const { name, description, img, price, ingredients } = item;
  const listIngredients = ingredients.map(ingredient => {
    return <li className="ingredients_item">{ingredient}</li>;
  });

  return (
    <div className="details">
      <header className="header">
        <nav className="nav">
          <div className="detailsHeader header__nav">
            <Link to="/meals">
              <i className="back fas fa-arrow-left"></i>
            </Link>
            <span className="titel">Make your meal</span>
          </div>
        </nav>
      </header>
      <div className="mealName">
        <h5 className="name">{name}</h5>
        <div className="price">
          Price: <span className="val">{price}&nbsp;&nbsp;&nbsp;NIS</span>
        </div>
      </div>
      <img src={img} alt="MealImage" className="imgMeal" />
      <div className="desc">
        Description :<p className="descMeal">{description}</p>
      </div>

      <div className="mainIngreddients">
        Main Ingredients :<ul className="ingredients">{listIngredients}</ul>
      </div>
      <div className="editableIngradients">
        Editable Ingradients :
        <div className="optios">
          <div className="vegetables select">
            <div>- Vegetables</div>
            <label htmlFor="capsicurm">
              Capsicum
              <input type="checkbox" value="Capsicurm" id="capsicurm" />
            </label>
            <label htmlFor="tomato">
              Tomato
              <input type="checkbox" value="Tomato" id="tomato" />
            </label>
            <label htmlFor="onions">
              Onions
              <input type="checkbox" value="Onions" id="onions" />
            </label>
          </div>
          <div className="spices select">
            <div>- Spices</div>
            <label htmlFor="littel">
              Littel
              <input type="radio" value="Littel" id="littel" name="spice" />
            </label>
            <label htmlFor="meduim">
              Meduim
              <input type="radio" value="Meduim" name="spice" id="meduim" />
            </label>
            <label htmlFor="extra">
              Extra
              <input type="radio" value="Extra" name="spice" id="extra" />
            </label>
          </div>
          <div className="salt select">
            <div>-Salt</div>
            <label htmlFor="littelS">
              Littel
              <input type="radio" id="littelS" value="Littel" name="salt" />
            </label>
            <label htmlFor="meduimS">
              Meduim
              <input type="radio" id="meduimS" value="Meduim" name="salt" />
            </label>
            <label htmlFor="extraS">
              Extra
              <input type="radio" value="Extra" name="salt" />
            </label>
          </div>
        </div>
        <div className="quantity">
          <label htmlFor="quantity">
            Quantity:
            <input
              className="quantity"
              type="number"
              name="Quantity"
              id="quantity"
            />
          </label>
        </div>
        <div className="btns">
          <Button className="btn_order">Show my order</Button>
          <Button className="btn_order">Add to my order</Button>
        </div>
      </div>
    </div>
  );
};
Details.propTypes = {
  item: PropTypes.isRequired,
  state: PropTypes.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Details;
