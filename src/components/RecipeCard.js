import React, { Component } from 'react';

class RecipeCard extends Component {
  render() {
    return (
      <div className="RecipeCard">
      <h3>{this.props.title}</h3>
      <img src={this.props.thumbnail} alt=""/>
      </div>
    );
  }
}

export default RecipeCard;