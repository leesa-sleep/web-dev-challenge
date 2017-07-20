import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RecipeCard from './RecipeCard';
import Button from './Button';
import { fetchAllRecipes, addToFavourites } from '../actions/actions';

class MainPage extends Component {

    render () {
        console.log(this.props)
        if (this.props.recipes <= 0) return <div className='jumbotron'><h3>
            Please enter a selection of ingredients (comma seperated) to find related recipes</h3>
        </div>;

        else {
        return (
            <div>
                <div className='jumbotron'><h1>Recipes</h1></div>
                {this.generateRecipesCards(this.props.recipes)}
            </div>
        );
        }
    }

    generateRecipesCards (recipes) {

        return (
            recipes.map((recipe, i) => {
                return (
                    <div className='col-md-6' key={i}>
                        <div className='panel panel-default'>
                            <RecipeCard 
                                key={recipe.title}
                                {...recipe}
                            />
                            <Button 
                                add={this.props.addToFavourites}
                                {...recipe}
                                text={'Add'}
                                className={'glyphicon glyphicon-plus'}
                            />
                        </div>
                    </div>
                );
            })
        );
    }
}

function mapStateToProps (state) {
    return {
        loading: state.search.loading,
        error: state.search.error,
        recipes: state.search.recipes,
        favourites: state.favourites.favourites
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllRecipes: (ingredients) => {
            dispatch(fetchAllRecipes(ingredients));
        },
        addToFavourites: (favourite) => {
            dispatch(addToFavourites(favourite));
        }
    };
}

MainPage.propTypes = {
    recipes: PropTypes.array.isRequired,
    addToFavourites: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (MainPage);