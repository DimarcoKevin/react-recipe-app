import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, ingredients, image}) => {
    calories = Math.round(calories);
    return (
        <div className={style.Recipe}>
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