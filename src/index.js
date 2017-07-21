import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/App';
import MainPage from './components/MainPage';
import FavouritesPage from './components/FavouritesPage';
import Reducer from './reducers/reducer';
import '../public/css/main.css';

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={MainPage} />
                <Route path='recipes/:ingredients' component={MainPage} />
                <Route path='/favourites' component={FavouritesPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('App')
);

 