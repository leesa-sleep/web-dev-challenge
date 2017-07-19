import { combineReducers } from 'redux';

import searchReducer from './search.reducer';
import favouritesReducer from './favourites.reducer';

export default combineReducers({
    search: searchReducer,
    favourites: favouritesReducer
});
