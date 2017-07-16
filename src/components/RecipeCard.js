import React, { Component } from 'react';


class RecipeCard extends Component {
  render () {
    let ingredients = this.props.ingredients;
    function ingredientCount (ingredients) {
      return ingredients.split(',').length;
    }
    return (
      <div className="RecipeCard">
        <h3>{this.props.title}</h3>
        <img src={this.props.thumbnail} alt="" />
        <h5>Ingredients: {ingredients}</h5>
        <h5>Total ingredients: {ingredientCount(ingredients)}</h5>
      </div>
    );
  }
}

export default RecipeCard;