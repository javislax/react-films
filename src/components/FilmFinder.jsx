import React, { useRef } from "react";
import "../App.css";

export function FilmFinder({ addNewFilm }) {
  const filmRef = useRef();

  const addFilm = (e) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    const inputValue = filmRef.current.value;
    if (inputValue.trim() !== "") {
      addNewFilm(inputValue);
    }
    filmRef.current.value = null;
  };

  return (
    <fragment>
      <div className="input-group mb-3">
        <input
          ref={filmRef}
          type="text"
          onKeyPress={addFilm}
          className="form-control"
          placeholder="Nombre de una película"
        />
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
