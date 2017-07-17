import React, { Component } from 'react';
import FaveList from './FaveList';
import NavBar from './NavBar';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';
import * as actions from '../actions/index.js';
import {connect} from 'react-redux';
const ingredient = 'cheese';

class FavePage extends Component {
  componentDidMount () {
    this.props.fetchRecipes(ingredient);
  }
  render () {
    return (
      <div className="FavePage">
      <NavBar />
      <SearchForm />
      <FaveList />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchRecipes: (ingredient) => {
      dispatch(actions.fetchRecipes(ingredient));
    }
  };
}

FavePage.propTypes = {
  fetchRecipes: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(FavePage);