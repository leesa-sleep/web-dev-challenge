import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';


class RecipeCard extends Component {
 constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToFavourites(this.props.title, this.props.thumbnail, this.props.ingredients);
  }
  render() {
    let title = this.props.title
    let thumbnail = this.props.thumbnail
    let ingredients = this.props.ingredients;
    function ingredientCount(ingredients) {
      return ingredients.split(',').length;
    }
    return (
      <div className="RecipeCard">
        <h3>{title}</h3>
        <img src={thumbnail} alt="" />
        <h5>Ingredients: {ingredients}</h5>
        <h5>Total ingredients: {ingredientCount(ingredients)}</h5>
        <button type="button" className="btn" onClick={this.handleSubmit}>Add to favourites</button>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToFavourites: (title, thumbnail, ingredients) => {
      dispatch(actions.addToFavourites(title, thumbnail, ingredients));
    }
  };
}

RecipeCard.propTypes = {
  addToFavourites: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(RecipeCard);

