import React, { useState, useEffect } from "react";
import "./App.css";
import { FilmList } from "./components/FilmList";
import { FilmFinder } from "./components/FilmFinder";
import { v4 as uuidv4 } from "uuid";

const KEY = "filmsApp.list";

export function App() {
  const [films, setFilms] = useState([{ id: 1, name: "Test" }]);

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const storedFilms = JSON.parse(localStorage.getItem(KEY));
    if (storedFilms) {
      setFilms(storedFilms);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(films));
  }, [films]);

  const addNewFilm = (value) => {
    console.log("Quiero añadir una peli", value);

    let newId = 1;
    if (films.length > 0) {
      newId = films[films.length - 1].id + 1;
    }

    const newFilm = {
      id: newId,
      name: value,
      viewed: false,
    };

    setFilms((prevFilms) => [...prevFilms, newFilm]);
  };

  const deleteFilm = (id) => {
    const newList = films.filter((item) => item.id !== id);
    setFilms(newList);
    console.log("quiero eliminar la peli", id);
  };

  const markAsRead = (id) => {
    console.log("quiero eliminar la peli", id);
    const newFilms = [...films];
    const film = newFilms.find((film) => film.id === id);
    film.viewed = !film.viewed;
    setFilms(newFilms);
  };

  return (
    <fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <FilmFinder addNewFilm={addNewFilm} />
            <FilmList
              films={films}
              deleteFilm={deleteFilm}
              markAsRead={markAsRead}
            />
          </div>
        </div>
      </div>
    </fragment>
  );
}
