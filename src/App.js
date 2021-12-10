import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([]);
const [currentCharId, setCurrentCharId] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(resp => {
    console.log(resp.data); 
    setCharacters(resp.data);
  })
  .catch(() => console.error('Oops! Something went wrong...wanna try again?'))
  }, [])

const openDetails = id => {
  setCurrentCharId(id)
}

const closeDetails = () => {
  setCurrentCharId(null)
}

  return (
    <div className="App">
      <h1 className="Header">These are not the Characters you are looking for...</h1>
      {characters.map(char => {
        return <Character key={char.name} data={char} action={openDetails} />
      })
    }
    {
      currentCharId && <Details CharId={currentCharId} close={closeDetails} />
    }
    </div>
  );
}

export default App;
