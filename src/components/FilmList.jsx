import React from "react";
import { FilmItem } from "./FilmItem";

export function FilmList({ films ,deleteFilm,markAsRead}) {
  return (
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
            <FilmItem key={film.id} film={film} deleteFilm={deleteFilm} toggleRead={markAsRead}/>            
          ))}        
      </tbody>
    </table>
  );
}