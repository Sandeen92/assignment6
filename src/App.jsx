import { useState } from 'react'
import './App.css'
import AddMovieForm from './components/AddMovieForm'
import MovieList from './components/MovieList';
import Button from './components/Button';

function App() {
  const [movies, setMovies] = useState([]);

  function handleAddMovie(title, grade) {
    const copy = movies.slice()
    copy.push({ title, grade: parseInt(grade) })
    setMovies(copy)
  };

  function handleDeleteMovie(index) {
    const copy = movies.slice();
    copy.splice(index, 1);
    setMovies(copy);
  };

  function handleSort(type) {
    const copy = movies.slice();
    if (type === "alpha") {
      copy.sort(function(a, b) {
        return a.title.localeCompare(b.title);
      });
    }
    if (type === "rating") {
        copy.sort(function(a, b) {
          return b.grade - a.grade;
        });
    }
    setMovies(copy);
  };

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
        <div className="d-flex justify-content-start">
          <Button type="alpha" onSort={handleSort}/>
          <Button type="rating" onSort={handleSort}/>
        </div>
      </div>
    </>
  )
}

export default App;
