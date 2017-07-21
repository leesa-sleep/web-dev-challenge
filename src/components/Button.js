import React from 'react';

import PropTypes from 'prop-types';

const Button = (props) => {

    const recipeObject = {title: props.title, thumbnail: props.thumbnail, 
    ingredients: props.ingredients, href: props.href};
    
    switch (props.text) {

        case 'Add':
            return <button 
                type='button'
                id='add'
                className='btn btn-default btn-sm'
                onClick={props.add.bind(null, recipeObject)}
                >
                <span className={props.className} aria-hidden='true'/>
            </button>;
        
        case 'Delete': {
            return <button
                type='button'
                id='delete'
                className='btn btn-default btn-sm'
                onClick={props.delete.bind(null, recipeObject)}
                >
                <span className={props.className} aria-hidden='true'/>
            </button>;
        }

        default:
            return <button
                type='button'
                className='btn btn-default btn-sm navbar-btn'
                >
                <span className={props.className} aria-hidden='true' />
                {props.text}
            </button>;
    }
};

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    delete: PropTypes.func,
    add: PropTypes.func,
    title: PropTypes.string,
    ingredients: PropTypes.string,
    href: PropTypes.string,
    thumbnail: PropTypes.string
};

export default Button;
