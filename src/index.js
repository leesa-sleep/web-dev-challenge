// react
import React from 'react';
import ReactDOM from 'react-dom';

// react-router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import './css/index.css';
import HomePage from './components/HomePage';
import FavePage from './components/FavePage';

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/favourites" component={FavePage} />
  </div>
</Router>, document.getElementById('root'));

