// import React from "react";
import '../StarShips.css'; 

const StarShips = ({starShips}) => {

    if (!starShips) return <div>Loading starships...</div>;  // Handling the loading state
    console.log(starShips[1])
    return ( 
        <div>
        <h2 className = "header"> Star Ships </h2>
            
      <div className="starship-grid">
             {starShips.map((ship, index) => (
            <div key={index} className="starship-card">
                <h3 className="text">{ship.name}</h3>
                <p className="text">Model: {ship.model}</p>
            </div>
              ))}
         </div>

    </div>
     );
}
 
export default StarShips;



