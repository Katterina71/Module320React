import { useParams } from "react-router-dom";

const StarShip = ({starships}) => {

    const params = useParams();
    console.log(params)
    const starShipName =params.id

    return ( 
        <h1>Hello {starShipName}</h1>
     );
}
 
export default StarShip;