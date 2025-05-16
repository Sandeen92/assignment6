function Movie({ title, grade }) {
  const stars = [];
  for (let i = 0; i < grade; i++) {
    stars.push(
      <img
        key={i}
        src="/images/star.png"
        alt="Star"
      />
    );
  }

  return (
    <li
      data-grade={grade}
      data-title={title}
      className="mb-2 p-3 bg-light shadow-sm d-flex justify-content-between align-items-center"
    >
      <span>{title}</span>
      <span>
        {stars}
        <img
          src="/images/delete.png"
          alt="Delete movie"
          className="delete-movie-icon"
        />
      </span>
    </li>
  );
}

export default Movie;