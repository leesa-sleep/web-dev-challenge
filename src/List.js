export const list = [
  {
    title: "Creamy Scrambled Eggs Recipe Recipe",
    href: "http://www.grouprecipes.com/43522/creamy-scrambled-eggs-recipe.html",
    ingredients: "onions",
    thumbnail: "http://img.recipepuppy.com/373064.jpg"
  },
  {
    title: "Blue Ribbon Meatloaf",
    href: "http://www.eatingwell.com/recipes/meatloaf.html",
    ingredients: "onions",
    thumbnail: "http://img.recipepuppy.com/694321.jpg"
  },
  {
    title: "Spaghetti with Clams & Corn",
    href: "http://www.eatingwell.com/recipes/spaghetti_clams_corn.html",
    ingredients: "onions",
    thumbnail: "http://img.recipepuppy.com/698569.jpg"
  },
  {
    title: "Green Bean Casserole",
    href: "http://www.eatingwell.com/recipes/healthy_green_bean_casserole.html",
    ingredients: "onions",
    thumbnail: "http://img.recipepuppy.com/707237.jpg"
  },
  {
    title: " Broccoli Casserole Recipe ",
    href: "http://cookeatshare.com/recipes/broccoli-casserole-59082",
    ingredients: "onions",
    thumbnail: "http://img.recipepuppy.com/780513.jpg"
  },
  {
    title: "Crock Pot Caramelized Onions",
    href: "http://www.recipezaar.com/Crock-Pot-Caramelized-Onions-191625",
    ingredients: "butter, onions",
    thumbnail: "http://img.recipepuppy.com/338845.jpg"
  },
  {
    title: "Pulled Chicken Sandwiches (Crock Pot)",
    href: "http://www.recipezaar.com/Pulled-Chicken-Sandwiches-Crock-Pot-242547",
    ingredients: "chicken, onions",
    thumbnail: "http://img.recipepuppy.com/107122.jpg"
  },
  {
    title: "Grilled Chipotle Salmon With Pineapple Cilantro Rice",
    href: "http://www.recipezaar.com/Grilled-Chipotle-Salmon-With-Pineapple-Cilantro-Rice-128564",
    ingredients: "salmon, onions",
    thumbnail: "http://img.recipepuppy.com/715159.jpg"
  },
  {
    title: "Roast Chicken with Rosemary",
    href: "http://allrecipes.com/Recipe/Roast-Chicken-with-Rosemary/Detail.aspx",
    ingredients: "onions, salt",
    thumbnail: "http://img.recipepuppy.com/18294.jpg"
  },
  {
    title: "Boiled Ham",
    href: "http://www.recipezaar.com/Boiled-Ham-11162",
    ingredients: "ham, onions",
    thumbnail: "http://img.recipepuppy.com/182730.jpg"
  }
];

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import App from './components/App';
import Favorites from './components/Favorites';


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={App} />
      <Route path="/favorites" component={Favorites} />
    </div>
  </Router>
)


export default BasicExample;

