import React, { Component } from 'react';
import FaveList from './FaveList';
import NavBar from './NavBar';
import * as actions from '../actions/index.js';
import {connect} from 'react-redux';
import '../css/FavePage.css';

class FavePage extends Component {
  componentDidMount () {
    this.props.fetchFavourites();
  }
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    this.props.removeAllFavourites();
  }
  render () {
    return (
      <div className="FavePage">
      <NavBar />
      <div className='clear-button'>
      <button type="button" className="btn" onClick={this.handleClick}>Clear favourites</button>
      </div>
      <FaveList />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchFavourites: () => {
      dispatch(actions.fetchFavourites());
    },
    removeAllFavourites: () => {
      dispatch(actions.removeAllFavourites());
    }
  };
}

export default connect(null, mapDispatchToProps)(FavePage);
