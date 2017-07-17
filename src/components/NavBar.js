import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
  render () {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/" id='nav-item'>Home</a></li>
                <li><a href="/favourites" id='nav-item'>Favourites</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;