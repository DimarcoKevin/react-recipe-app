import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '0f28e298';
  const APP_KEY = 'b56e3ba36e59352bf8f05e481a550c1a';

  const example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
