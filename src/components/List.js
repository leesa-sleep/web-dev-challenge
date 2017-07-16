import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class List extends Component {
  render () {
    return (
      <div className="List">
      {this.props.recipes.recipes.map((recipe, i) => {
        return (
      <RecipeCard 
      key={i}
      title={recipe.title}
      thumbnail={recipe.thumbnail}
      />
        );
      })}
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