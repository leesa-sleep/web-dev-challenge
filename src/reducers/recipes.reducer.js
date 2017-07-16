import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  recipes: []
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
    default:
      return prevState;
  }
}