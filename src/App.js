import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  /**
   * These are the api keys for the edamam website
   */
  const APP_ID = '0f28e298';
  const APP_KEY = 'b56e3ba36e59352bf8f05e481a550c1a';

  /**
   * These are the states used for recipes, searching, and querying
   */
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  /**
   * The useEffect utilizes async and await calls
   * It calls the API for the search based on the ingredient the user enters
   * It waits for the reponse
   * Then it waits to process the json file
   * It then uses the data from the API to build a Recipe object for each recipe provided
   */
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  /**
   * This will set the query and then clear the search bar
   */
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  /**
   * This will update the search based on keystrokes entered
   */
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  /**
   * This is the main 'App' component
   * It will build the search bar and button
   * It also calls the Recipe class and builds each recipe component
   */
  return (
    <div className="App">
      <form onSubmit={getSearch} className="SearchForm">
        <input className="SearchBar" type="text" value={search} onChange={updateSearch}/>
        <button className="SearchButton" type="submit">
          Search
        </button>
      </form>
      <div className="Recipe">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
