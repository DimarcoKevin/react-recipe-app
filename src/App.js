import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '0f28e298';
  const APP_KEY = 'b56e3ba36e59352bf8f05e481a550c1a';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="SearchForm">
        <input className="SearchBar" type="text"/>
        <button className="SearchButton" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe></Recipe>
      ))};
    </div>
  );
};

export default App;
