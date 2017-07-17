import React, { Component } from 'react';

class FaveCard extends Component {
  render() {
    let title = this.props.title
    let thumbnail = this.props.thumbnail
    let ingredients = this.props.ingredients;
    function ingredientCount(ingredients) {
      return ingredients.split(',').length;
    }
    return (
      <div className="RecipeCard">
        <div className='col-sm-4'>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{title}</h4>
              <img src={thumbnail} alt="" />
              <h5><strong>Ingredients:</strong> {ingredients}</h5>
              <h5><strong>Total ingredients:</strong> {ingredientCount(ingredients)}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaveCard;