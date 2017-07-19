import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';

class App extends Component {

    render () {
        return (
        <div className='container'>
            <NavBar />
            {this.props.children}
        </div>
        );
    }
} 

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
