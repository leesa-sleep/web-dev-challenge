import * as types from './types';
import axios from 'axios';

const ROOT = 'http://www.recipepuppy.com/api';

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
            axios.get(
                    `http://www.recipepuppy.com/api/?i=${ingredients}`)
                    //, [
                    // {headers:{'Access-Control-Allow-Origin': '*',
                    //     'Access-Control-Allow-Methods': 'GET',
                    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
                    // 'Access-Control-Allow-Credentials': 'true'}}])
            // //             headers: { 'Access-Control-Allow-Origin': '*', 
            // //    'Access-Control-Allow-Methods': 'GET',
            // //    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
            // //    'Access-Control-Allow-Credentials': 'true' }
            // //         }
            //     )
            // fetch(`http://www.recipepuppy.com/api/?i=${ingredients}`)
                .then(res => {
                    console.log(res)
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


