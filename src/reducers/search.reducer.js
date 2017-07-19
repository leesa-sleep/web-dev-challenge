import * as types from '../actions/types';

const initialState = {
    loading: false,
    error: null,
    recipes: []
};

export default function (prevState = initialState, action) {

    switch (action.type) {

        case types.FETCH_ALL_RECIPE_REQUEST:
            return Object.assign({}, prevState, {
                loading: true
            });
        
        case types.FETCH_ALL_RECIPE_SUCCESS:
            return Object.assign({}, prevState, {
                recipes: action.data,
                loading: false
            });
        
        case types.FETCH_ALL_RECIPE_ERROR:
            return Object.assign({}, prevState, {
                error: action.error,
                loading: false
            });
        
        default:
            return prevState;
    }
}
