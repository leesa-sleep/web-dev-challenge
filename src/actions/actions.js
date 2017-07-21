import * as types from './types';
import axios from 'axios';
import config from '../../config';

export function fetchAllRecipeRequest () {
    return {
        type: types.FETCH_ALL_RECIPE_REQUEST
    };
}

export function fetchAllRecipeSuccess (data) {
    return {
        type: types.FETCH_ALL_RECIPE_SUCCESS,
        data
    };
}

export function fetchAllRecipeError (error) {
    return {
        type: types.FETCH_ALL_RECIPE_ERROR,
        error
    };
}

export function fetchAllRecipes (ingredients) {
    return dispatch => { 
        dispatch(fetchAllRecipeRequest());
            axios
                .get(`${config.PROXY}/?i=${ingredients}`)
                .then(res => {
                    dispatch(fetchAllRecipeSuccess(res.data.results));
                })
                .catch(error => {
                    dispatch(fetchAllRecipeError(error));
                });
    };
}

export function addToFavouriteSuccess (favourite) {
    return {
        type: types.ADD_TO_FAVOURITES,
        favourite
    };
}

export function addToFavourites (favourite) {
    return dispatch => {
        dispatch(addToFavouriteSuccess(favourite));
    };
}

export function deleteFromFavourites (favourite) {
    return {
        type: types.DELETE_FROM_FAVOURITES,
        favourite
    };
}

export function deleteFavourite (favourite) {
    return dispatch => {
        dispatch(deleteFromFavourites(favourite));
    };
}


