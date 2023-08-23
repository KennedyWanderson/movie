import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'

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

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('SpiderMan')
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value="Superman" onChange={() => { }} />
        <img src={SearchIcon} alt="search" onClick={() => { }} />
      </div>
      <div className="container">
        <div className="movie"></div>
        <div>
          <p>{movie1.Year}</p>
        </div>

        <div>
          <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
        </div>

        <div>
          <span>{movie1.Type}</span>
          <h3>{movie}</h3>
        </div>

      </div>
    </div>
  );
}

export default App