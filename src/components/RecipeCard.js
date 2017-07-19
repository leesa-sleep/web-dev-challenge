import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = (props) => {
    return (
        <div className='thumbnail'>
            <img src={props.thumbnail} alt="recipe-pic"/>
            <div className='caption'>
                <div className='panel panel-header'>
                    <h3 className='header-text'>{props.title}</h3>
                </div>
                <p>{props.ingredients}</p>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
};

export default RecipeCard;
