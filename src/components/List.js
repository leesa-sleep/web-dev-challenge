import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class List extends Component {
  render () {
    return (
      <div className="List">
      <h3>List component</h3>
      <RecipeCard />
      </div>
    );
  }
}

export default List;