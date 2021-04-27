import React, { useState, useEffect } from "react";
import "./App.css";
import { FilmList } from "./components/FilmList";
import { FilmFinder } from "./components/FilmFinder";

const KEY = "filmsApp.list";

export function App() {
  const [films, setFilms] = useState([{ id: 1, name: "Test"}]);

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
    const newFilm = {
      id: counter,
      name: value,
      viewed: false,
    };

    setCounter(counter + 1)

    setFilms((prevFilms) => [...prevFilms, newFilm]);
  };

  return (
    <fragment>
      <FilmFinder addNewFilm={addNewFilm} />
      <FilmList films={films} />
    </fragment>
  );
}
