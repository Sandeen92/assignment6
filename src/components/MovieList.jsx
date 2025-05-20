import Movie from './Movie';

function MovieList({ movies, onDeleteMovie }) {
  return (
    <div>
      <h2 className="mt-4">Inlagda filmer</h2>
      <ul id="movies" className="ps-0 ms-0">
        {movies.map((movie, index) => (
          <Movie key={index} title={movie.title} grade={movie.grade} onDelete={() => onDeleteMovie(index)} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;