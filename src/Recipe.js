import React from 'react';

const Recipe = ({title, calories, image}) => {
    calories = Math.round(calories);
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories} calories</p>
            <img src={image} alt={title + " image"}></img>
        </div>
    );
}

export default Recipe;