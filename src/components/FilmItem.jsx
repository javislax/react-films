import React from "react";

export function FilmItem({ film, deleteFilm, toggleRead }) {
  const { id, name, viewed } = film;
  const handleFilmDelete = () => {
    deleteFilm(id);
  };
  const handleFilmRead = () => {
    toggleRead(id);
  };

  return (
    <tr>
      <th scope="row">{film.id}</th>
      <td>
        {film.name}
        {film.viewed ? '✔️' : ''}
      </td>
      <td>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={handleFilmRead}
          >
            La he visto
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleFilmDelete}
          >
            Eliminar
          </button>
        </div>
      </td>
      <td>{film.viewed}</td>
    </tr>
  );
}
