import React, { Component } from 'react';
import NavBar from './NavBar.js';
import SearchForm from './SearchForm.js';

class HomePage extends Component {
  render () {
    return (
      <div className="HomePage">
        <NavBar />
        <SearchForm />
      </div>
    );
  }
}

export default HomePage;