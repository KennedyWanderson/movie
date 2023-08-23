import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//https://www.omdbapi.com/ = API

//afa7a45e

const API_URL = 'http://www.omdbapi.com?apikey=afa7a45e'

const movie1 = {
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies ] = useState([]);
  const [searchTerm, setsearch ] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('SpiderMan')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>
        <div className="search">
          <input placeholder="Search for movies" value={searchTerm} onChange={() => { }} />
          <img src={SearchIcon} alt="search" onClick={() => { }} />
        </div>

        {
          movies?.length > 0
            ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard movie={movie} />
                ) )}
              </div>
            ) : (
              <div className="empty">
                <h2>No movies Found</h2>
              </div>
            )
        }
    </div>
  );
}

export default App