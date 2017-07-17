import React, { Component } from 'react';
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux';

class FaveList extends Component {
  render () {
    if (!this.props.recipes.favourites) {
      return <h4>loading...</h4>;
    }
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

export default connect(mapStateToProps)(FaveList);