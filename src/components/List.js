import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends Component {
  render () {
    if (this.props.recipes.error || this.props.recipes.recipes.length === 0) {
      return <h4 id='message'>No recipes found for that ingredient, please try again</h4>;
    }
    return (
      <div className="list">
        <div className='container'>
          <div className='row'>
            {this.props.recipes.recipes.map((recipe, i) => {
              return (
                <RecipeCard
                  key={i}
                  title={recipe.title}
                  thumbnail={recipe.thumbnail}
                  ingredients={recipe.ingredients}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  };
}

List.PropTypes = {
  recipes: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(List);