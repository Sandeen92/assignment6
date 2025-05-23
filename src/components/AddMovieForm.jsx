function AddMovieForm({ onAddMovie }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('title-field').value;
    const grade = document.getElementById('rating-field').value;

    if (title.trim() === '') {
      alert('Titel måste fyllas i');
      return;
    }

    if (grade === '0') {
      alert('Välj ett betyg');
      return;
    }

    onAddMovie(title, grade);

    document.getElementById('title-field').value = '';
    document.getElementById('rating-field').value = '0';
  };

  return (
    <div>
      <form id="add-movie-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Lägg till en film</legend>
          <hr />

          <label htmlFor="title-field">Titel:</label>
          <input type="text" id="title-field" className="form-control mt-1 mb-1" placeholder="Skriv titel här..."/>

          <label htmlFor="rating-field">Betyg:</label>
          <select id="rating-field" className="form-control mt-2 ">
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

            <div className="text-start"><input type="submit" className="btn btn-success mt-3 mb-3" value="Spara film"/></div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddMovieForm;