import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteFavourite } from '../actions/actions';
import RecipeCard from './RecipeCard';
import Button from './Button';

class FavouritesPage extends Component {
    
    render () {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Favourites</h1>
                </div>
                {Object.keys(this.props.favourites).map((favourites, i) => {
                    const favourite = this.props.favourites[favourites];
                    
                    return (
                        <div key={i} className='col-md-6'> 
                            <div className='panel panel-default'>                         
                                <RecipeCard
                                    key={favourite.title}
                                    {...favourite}
                                />
                                <Button 
                                    text={'Delete'}
                                    {...favourite}
                                    delete={this.props.deleteFavourite}
                                    className={'glyphicon glyphicon-minus'}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
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
        deleteFavourite: (favourite) => {
            dispatch(deleteFavourite(favourite));
        }
    };
}

FavouritesPage.propTypes = {
    favourites: PropTypes.object.isRequired,
    deleteFavourite: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (FavouritesPage);