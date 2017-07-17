import axios from 'axios';
import * as types from './types';

const API_ROOT = 'http://www.recipepuppy.com/api';

export function fetchRecipes (ingredient) {
  return function (dispatch) {
    dispatch({ type: types.FETCH_RECIPES_REQUEST });
    return axios.get(`${API_ROOT}/?i=${ingredient}`)
      .then(function (response) {
        dispatch({
          type: types.FETCH_RECIPES_SUCCESS,
          recipes: response.data.results
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.FETCH_RECIPES_ERROR,
          error
        });
      });
  };
}

export function addToFavourites (title, thumbnail, ingredients) {
  return function (dispatch) {
    return dispatch({
      type: types.ADD_TO_FAVOURITES,
      recipe: [{title: title, thumbnail: thumbnail, ingredients: ingredients, addedToFavourites: true}]
    });
  };
}

export function removeAllFavourites () {
  return function (dispatch) {
    return dispatch({
      type: types.REMOVE_ALL_FAVOURITES,
      favourites: []
    });
  };
}

export function fetchFavourites () {
  return function (dispatch) {
    return dispatch({
      type: types.FETCH_FAVOURITES,
      favourites: []
    });
  };
}
