// import React from "react";
import '../StarShips.css'; 
import {Link} from 'react-router-dom'

const StarShipsDisplay = ({starShips}) => {

    if (!starShips) return <div>Loading starships...</div>;  // Handling the loading state
    console.log(starShips[1])
    return ( 
        <div>
        <h2 className = "header"> Star Wars Ships </h2>
            
      <div className="starship-grid">
             {starShips.map((ship, index) => (
              <Link key={index} to={`/star-ship/${index}`} >
                <div key={index} className="starship-card">
                    <h3 className="text">{ship.name}</h3>
                    <p className="text">Model: {ship.model}</p>
                    <p className="text">Crew: {ship.crew}</p>
                </div>
            </Link>
              ))}
         </div>

    </div>
     );
}
 
export default StarShipsDisplay;



