import * as types from '../actions/types';

const initialState = {
    favourites: {}
};

export default function (prevState = initialState, action) {

    switch (action.type) {
        
        case types.ADD_TO_FAVOURITES: {
            const title = action.favourite.title;
            return Object.assign({}, prevState, {
                favourites: Object.assign({}, prevState.favourites, {
                    [title]: action.favourite
                }) 
            });
        }

        case types.DELETE_FROM_FAVOURITES: {
            const title = action.favourite.title;
            const newState = Object.assign({}, prevState);
            const newData = Object.assign({}, prevState.favourites);
            delete newData[title];
            newState.favourites = newData;
            return newState;
        }
        
        default:
            return prevState;
    }
}