// react
import React from 'react';
import ReactDOM from 'react-dom';

// components
import './css/index.css';
import HomePage from './components/HomePage';
import FavePage from './components/FavePage';

// react-router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// redux
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// redux-persist
// import { autoRehydrate, persistStore } from 'redux-persist';

// reducer
import recipes from './reducers/recipes.reducer';

// constants for redux
const logger  = createLogger();
const reducer = combineReducers({
  recipes
});
const store = createStore(
  reducer, 
  compose(
  applyMiddleware(thunk, logger)
  // autoRehydrate()
  )
  );

// persistStore(store);  

ReactDOM.render(
  <Provider store={store}>
<Router>
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/favourites" component={FavePage} />
  </div>
</Router>
</Provider>, document.getElementById('root'));

