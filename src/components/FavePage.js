import React, { Component } from 'react';
import List from './List';
import NavBar from './NavBar';

class FavePage extends Component {
  render () {
    return (
      <div className="FavePage">
      <NavBar />
      <List />
      </div>
    );
  }
}

export default FavePage;