import React, { Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';
import * as actions from '../actions/index.js';
import {connect} from 'react-redux';
import '../css/SearchForm.css';

class SearchForm extends Component {
  componentDidMount () {
    this.props.fetchRecipes(this.state.value);
  }
 constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  let ingredient = this.state.value;
    event.preventDefault();
    if (ingredient === '') {
      return;
    }
    this.props.fetchRecipes(ingredient);
    ingredient = '';
  }

  render () {
    return (
      <div>
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
      <List />
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

SearchForm.propTypes = {
  fetchRecipes: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SearchForm);
