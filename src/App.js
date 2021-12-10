import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {

const [characters, setCharacters] = useState([]);

useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(resp => {
    setCharacters(resp.data);
  })
  .catch(() => console.error('Oops! Something went wrong...wanna try again?'))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">These are not the Characters you are looking for...</h1>
      {characters.map(char => {
        return <Character key={char.name} data={char} />
      })
    }
    </div>
  );
}

export default App;
