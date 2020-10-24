import React from 'react';
import style from './recipe.module.css';

/**
 * This is what will create each of the recipe objects that is returned by the API
 * It will format them by Title, Calories, an array of Ingredients, and finally the dishes image
 */
const Recipe = ({title, calories, ingredients, image}) => {
    calories = Math.round(calories);
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories} calories</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt={title + " image"}></img>
        </div>
    );
}

export default Recipe;