import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import { fetchAllRecipes } from '../actions/actions';
import Button from './Button';

class NavBar extends Component {
    constructor (props) {
        super (props);

        this.state = {
            input: ''
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.submitIngredients = this.submitIngredients.bind(this);
    }

    render () {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link to={'/'}>
                            <label id='brand' className='navbar-brand'>LeesaRecipes</label>
                        </Link>
                    </div>
                        <form onSubmit={this.submitIngredients} 
                            className='navbar-form navbar-left'
                        >
                            <div className='form-group'>
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='Search Ingredients...'
                                    value={this.state.input}
                                    onChange={this.inputHandler}
                                />
                            </div>
                        </form>
                        <Link className='navbar-left' to={'/favourites'}>
                            <Button className={'glyphicon glyphicon-star'} text={'Favourites'}/>
                        </Link>
                </div>
            </nav>
        );
    }

    inputHandler (event) {
        this.setState({
            input: event.target.value
        });
    }

    submitIngredients (event) {
        event.preventDefault();
        this.props.fetchAllRecipes(this.state.input);
        browserHistory.push(`/recipes/${this.state.input}`);
        this.setState({ input: '' });
    }
}


function mapStateToProps (state) {
    return {
        loading: state.search.loading,
        error: state.search.error,
        recipes: state.search.recipes
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllRecipes: (event) => {
            dispatch(fetchAllRecipes(event));
        }
    };
}

NavBar.propTypes = {
    fetchAllRecipes: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);
