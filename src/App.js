import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MyApp from './components/MyApp';
import Favorites from './components/Favorites';



const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={MyApp} />
      <Route path="/favorites" component={Favorites} />
    </div>
  </Router>
)


export default BasicExample;

