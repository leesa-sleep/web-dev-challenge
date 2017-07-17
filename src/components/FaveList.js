import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FaveList extends Component {
  render () {
  console.log(this.props.favourites)
    return (
      <div className="FaveList">
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favourites: state.favourites
  };
}

FaveList.PropTypes = {
  favourites: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(FaveList);