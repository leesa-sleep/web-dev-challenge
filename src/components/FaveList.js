import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';


class FaveList extends Component {
  render () {
    return (
      <div className="fave-list">
        <div className='container'>
          <div className='row'>
            {this.props.recipes.favourites.map((recipe, i) => {
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

FaveList.PropTypes = {
  favourites: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(FaveList);