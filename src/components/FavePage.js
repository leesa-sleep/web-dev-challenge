import React, { Component } from 'react';
import FaveList from './FaveList';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import * as actions from '../actions/index.js';
import {connect} from 'react-redux';

class FavePage extends Component {
  componentDidMount () {
    this.props.fetchFavourites();
  }
  render () {
    return (
      <div className="FavePage">
      <NavBar />
      <FaveList />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchFavourites: () => {
      dispatch(actions.fetchFavourites());
    }
  };
}

FavePage.propTypes = {
  fetchFavourites: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(FavePage);