import React from 'react';
import Ingredients from './Ingredients/Ingredients';
import './Drink.css';
import drinkImg from '../../img/drink.png';

const Drink = ( {item, name, id, ingredients} ) => {

  // Get image URL from API
  let imgUrl = `http://assets.absolutdrinks.com/drinks/transparent-background-white/${id}.png`;

  // Get ingredients from state
  var ingredientArr =  ingredients.map(( ingredient, index ) => {
    return <Ingredients key={index} text={ingredient.textPlain} />
  });

  return(
    <section className="wrapper" >
      <div className="drink">
        <div className="content">
          <h2>{ name }</h2>
          { ingredientArr }
        </div>
        {/* Display image from API - if no image available, show default image */}
        <img onError={ (event)=>event.target.setAttribute("src", drinkImg) } src={ imgUrl } alt={ id } />
      </div>
      <div className="divider spin"></div>
    </section>
  );
}

export default Drink;