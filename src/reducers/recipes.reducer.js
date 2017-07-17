import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  recipes: [],
  favourites: []
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_RECIPES_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_RECIPES_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
    case types.FETCH_RECIPES_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        recipes: action.recipes
      });
    case types.ADD_TO_FAVOURITES:
      return Object.assign({}, prevState, {
        favourites: prevState.favourites.concat(action.recipe)
      });
    case types.REMOVE_ALL_FAVOURITES:
      return Object.assign({}, prevState, {
        favourites: action.favourites
      });
    case types.FETCH_FAVOURITES: 
      return Object.assign({}, prevState, {
        favourites: prevState.favourites
      });
    default:
      return prevState;
  }
}