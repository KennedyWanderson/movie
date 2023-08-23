import { useEffect, useState } from "react";
import styles from '.'
import SearchIcon from './search.svg'
import MovieCard from "./components/MovieCard";

//https://www.omdbapi.com/ = API

//afa7a45e

const API_URL = 'http://www.omdbapi.com?apikey=afa7a45e'

const App = () => {

  const [movies, setMovies ] = useState([]);
  const [searchTerm, setsearchTerm ] = useState('');


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
          <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
          <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
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