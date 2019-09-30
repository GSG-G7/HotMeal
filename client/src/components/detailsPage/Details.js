import React from 'react';
import imgMeal from '../../assets/shrimppizza.jpg';
import './style.css';

const Details = () => {
  return (
    <div className="details">
      <header className="header">
        <nav className="nav">
          <div className="header__nav">
            <i className="fas fa-arrow-left"></i>
            <span className="titel">Make your meal</span>
          </div>
        </nav>
      </header>
      <div className="mealName">
        <h5 className="name">Shrimp Pasta</h5>
        <div className="price">
          Price: <span className="val">25 NIS</span>
        </div>
      </div>
      <img src={imgMeal} alt="MealImage" className="imgMeal" />
      <div className="desc">
        Description :
        <p className="descMeal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet
          sequi, repudiandae quaerat nobis voluptatem iusto nemo mollitia nam
          possimus libero impedit magni blanditiis? Esse incidunt voluptatum
          voluptate quae nisi.
        </p>
      </div>

      <div className="mainIngreddients">
        Main Ingredients :
        <ul className="ingredients">
          <li>Shrimp</li>
          <li>Spaghetti</li>
        </ul>
      </div>
      <div className="editableIngradients">
        Editable Ingradients :
        <div className="optios">
          <div className="vegetables select">
            - Vegetables
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
            - Spices
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
            -Salt
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
            <input type="number" name="Quantity" id="quantity" />
          </label>
        </div>
      </div>
    </div>
  );
};
export default Details;
