import {useState, useEffect} from "react";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
    }
    catch(e) {
      console.error(e)
    }
  };

  const movies = [ "Star Wars", "The Matrix", "Inception", "Interstellar", "The Godfather", "Dune"];

  // This will run on the first render but not on subSquent renders
  useEffect(() => {
    const randomTitle = movies[Math.floor(Math.random() * movies.length)];
    getMovie(randomTitle);
  }, []);

  // We pass the getMovie function as a prop called movieSearch
  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
