import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as types from '../actions/types';
import recipes, { initialState } from './recipes.reducer';

describe('reducers: recipes', () => {
  it('is a function', () => {
    expect(recipes).to.be.a('function');
  });
  it('returns the previous state for unhandled actions', () => {
    const initialState = {
      test: 123
    };
    const action = { type: 'test' };
    expect(recipes(initialState, action)).to.equal(initialState);
  });
  it('returns the intitial state if no previous state is passed', () => {
    const action = { type: 'another test' };
    expect(recipes(undefined, action)).to.equal(initialState);
  });
  describe('action: fetchRecipes', () => {
    it('handles action type FETCH RECIPES REQUEST', () => {
      const initialState = deepFreeze({
        loading: false,
        error: null
      });
      const action = {
        type: types.FETCH_RECIPES_REQUEST,
        loading: true,
        error: null
      };
      const expectedState = {
        loading: true,
        error: null
      };
      expect(recipes(initialState, action)).to.eql(expectedState);
    });
    it('handles action type FETCH RECIPES SUCCESS', () => {
      const initialState = deepFreeze({
        loading: false,
        recipes: []
      });
      const action = {
        type: types.FETCH_RECIPES_SUCCESS,
        loading: false,
        recipes: [{title: 'recipe 1'}]
      };
      const expectedState = {
        loading: false,
        recipes: [{title: 'recipe 1'}]
      };
      expect(recipes(initialState, action)).to.eql(expectedState);
    });
    it('handles action type FETCH RECIPES ERROR', () => {
      const initialState = deepFreeze({
        loading: false,
        error: null
      });
      const action = {
        type: types.FETCH_RECIPES_ERROR,
        loading: false,
        error: 'something went wrong'
      };
      const expectedState = {
        loading: false,
        error: 'something went wrong'
      };
      expect(recipes(initialState, action)).to.eql(expectedState);
    });
    it('handles action type ADD TO FAVOURITES', () => {
      const initialState = deepFreeze({
        favourites: []
      });
      const action = {
        type: types.ADD_TO_FAVOURITES,
        recipe: [{title: 'title', thumbnail: 'test', ingredients: 'test, test', addedToFavourites: true}]
      };
      const expectedState = {
        favourites: [{title: 'title', thumbnail: 'test', ingredients: 'test, test', addedToFavourites: true}]
      };
      expect(recipes(initialState, action)).to.eql(expectedState);
    });
    it('handles action type REMOVE ALL FAVOURITES', () => {
      const initialState = deepFreeze({
        favourites: [{title: 'title', thumbnail: 'test', ingredients: 'test, test', addedToFavourites: true}]
      });
      const action = {
        type: types.REMOVE_ALL_FAVOURITES,
        favourites: []
      };
      const expectedState = {
        favourites: []
      };
      expect(recipes(initialState, action)).to.eql(expectedState);
    });
    it('handles action type FETCH FAVOURITES', () => {
      const initialState = deepFreeze({
        favourites: [{title: 'title', thumbnail: 'test', ingredients: 'test, test', addedToFavourites: true}]
      });
      const action = {
        type: types.FETCH_FAVOURITES,
        favourites: []
      };
      const expectedState = {
        favourites: [{title: 'title', thumbnail: 'test', ingredients: 'test, test', addedToFavourites: true}]
      };
      expect(recipes(initialState, action)).to.eql(expectedState);
    });
  });
});