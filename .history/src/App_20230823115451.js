import { useEffect } from "react";

//https://www.omdbapi.com/ = API

//afa7a45e

const API_URL = 'http://www.omdbapi.com?apikey=afa7a45e'

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data)
  }

  useEffect(() => {
    ServiceWorker
  }, [])

  return (
    <h1>App </h1>
  );
}

export default App