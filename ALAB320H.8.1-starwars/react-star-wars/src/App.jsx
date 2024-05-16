import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import StarShipsDisplay from './components/StarShipsDisplay';
import StarShip from './pages/StarShip'

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
    <BrowserRouter>
    <div>
      <Routes>
           <Route path="/" element={<StarShipsDisplay starShips={starShips} />} />
            <Route path="/star-ship/:id" element={<StarShip />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
