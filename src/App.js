import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '0f28e298';
  const APP_KEY = 'b56e3ba36e59352bf8f05e481a550c1a';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

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
