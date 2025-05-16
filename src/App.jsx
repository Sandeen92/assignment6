import { useState } from 'react'
import './App.css'
import AddMovieForm from './components/AddMovieForm'
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title, grade) => {
    const newMovie = { title, grade: parseInt(grade) };
    setMovies([...movies, newMovie]);
  };

  return (
    <>
      <div className="container">
        <div><h1>Min filmlista</h1></div>
        <div>
        <AddMovieForm onAddMovie={handleAddMovie}/>
        </div>
        <div>
          <MovieList movies={movies}/>
        </div>
      </div>
    </>
  )
}

export default App;
