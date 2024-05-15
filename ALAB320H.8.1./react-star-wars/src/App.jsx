import { useState, useEffect } from 'react'
import './App.css'

import StarShipsDisplay from './components/StarShipsDisplay';

function App() {
  const [starShips, setStarShips] = useState(null);

  useEffect(()=> {
    getAllStarShips()
  },[])

    const getAllStarShips = async() => {
      try {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json()
        setStarShips(data.results); 
      }
      catch(e){
        console.error(e);
      }
    };

  return (
    <div>
      <StarShipsDisplay starShips={starShips} />
    </div>
  );
}

export default App
