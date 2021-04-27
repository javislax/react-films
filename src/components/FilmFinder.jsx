import React, { useRef } from "react";
import "../App.css";

export function FilmFinder({ addNewFilm }) {
  const filmRef = useRef();

  const addFilm = () => {
    const inputValue = filmRef.current.value;
    addNewFilm(inputValue);
    filmRef.current.value = null;
  };

  return (
    <fragment>
      <div className="input-group mt-3">
        <input ref={filmRef} type="text" placeholder="Nombre de una película" />
        <button
          onClick={addFilm}
          type="button"
          className="btn btn-outline-secondary"
          id="button-addon2"
        >
          Añadir película
        </button>
      </div>
    </fragment>
  );
}
