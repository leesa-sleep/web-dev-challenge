import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaveCard from './FaveCard';
import '../css/FaveList.css';
import { uniq } from 'underscore';

function sortFaves (arr) {
  return uniq(arr, function (x) {
    return x.title;
  });
}

class FaveList extends Component {
  render () {
    if (this.props.recipes.favourites.length === 0) {
      return <h4 id='message'>You don't currently have any favourites saved.</h4>;
    }
    return (
      <div className="fave-list">
        <div className='container'>
          <div className='row'>
            {sortFaves(this.props.recipes.favourites).map((recipe, i) => {
              return (
                <FaveCard
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