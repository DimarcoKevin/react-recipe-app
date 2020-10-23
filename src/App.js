import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = '0f28e298';
  const APP_KEY = 'b56e3ba36e59352bf8f05e481a550c1a';

  useEffect(() => {
    
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="SearchForm">
        <input className="SearchBar" type="text"/>
        <button className="SearchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
