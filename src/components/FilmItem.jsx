import React from "react";

export function FilmItem({ film }) {
  const { id, name, viewed } = film;
  return (
    <tr>
      <th scope="row">{film.id}</th>
      <td>{film.name}</td>
      <td>Otto</td>
    </tr>
  );
}
