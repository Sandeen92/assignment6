import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div>
      <h2>Filmer</h2>
      <ul id="movies">
        {movies.map((movie, index) => (
          <Movie key={index} title={movie.title} grade={movie.grade} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;