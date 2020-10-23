import React from 'react';

const Recipe = ({title, calories, ingredients, image}) => {
    calories = Math.round(calories);
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories} calories</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img src={image} alt={title + " image"}></img>
        </div>
    );
}

export default Recipe;