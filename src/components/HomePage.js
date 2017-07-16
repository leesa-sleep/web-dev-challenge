import React, { Component } from 'react';
import NavBar from './NavBar.js';
import SearchForm from './SearchForm.js';
import List from './List.js';

class HomePage extends Component {
  render () {
    return (
      <div className="HomePage">
        <NavBar />
        <SearchForm />
        <List />
      </div>
    );
  }
}

export default HomePage;