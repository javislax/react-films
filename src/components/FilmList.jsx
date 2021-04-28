import React from "react";
import { FilmItem } from "./FilmItem";

export function FilmList({ films, deleteFilm, markAsRead }) {
  return (
    <div className="container">
      {films.length <= 0 ? (
        <h2>Ups! No hay datos!</h2>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Película</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film) => (
              <FilmItem
                key={film.id}
                film={film}
                deleteFilm={deleteFilm}
                toggleRead={markAsRead}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}