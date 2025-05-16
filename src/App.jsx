import { useState } from 'react'
import './App.css'
import AddMovieForm from './components/AddMovieForm'
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  function handleAddMovie(title, grade) {
    const copy = movies.slice()
    copy.push({ title, grade: parseInt(grade) })
    setMovies(copy)
  }

  function handleDeleteMovie(index) {
    const copy = movies.slice();
    copy.splice(index, 1);
    setMovies(copy);
  }

  return (
    <>
      <div className="container">
        <div><h1>Min filmlista</h1></div>
        <div>
        <AddMovieForm onAddMovie={handleAddMovie}/>
        </div>
        <div>
          <MovieList movies={movies} onDeleteMovie={handleDeleteMovie}/>
        </div>
      </div>
    </>
  )
}

export default App;
