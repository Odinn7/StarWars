 import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilm } from "../../redux/Films/selectors";
import { setFilm } from "../../saga/Films/action";
import Header from "../rootPage/header";
import "./index.css";

export default function Films() {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const films = useSelector(selectFilm);

  useEffect(() => {
    dispatch(setFilm());
  }, []);

  return (
    <div>
      <Header setSearchInput={setSearchInput} />
      <div className="filmsContainer">
        {films
          .filter((item) => {
            if (searchInput) {
              return item.title.includes(searchInput);
            } else {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="film">
                <div className="filmInfo">
                  <img src="https://i-fakt.ru/wp-content/uploads/2013/07/ls.jpg" />
                  <p>Title: {item.title}</p>
                  <p>Episode id: {item.episode_id}</p>
                  <p>Opening crawl: {item.opening_crawl}</p>
                  <p>Director: {item.director}</p>
                  <p>Producer: {item.producer}</p>
                  <p>Release date: {item.release_date}</p>
                  <p>Characters: {item.characters[0]}</p>
                  <p>Planets: {item.planets[0]}</p>
                  <p>Starships: {item.starships[0]}</p>
                  <p>Vehicles: {item.vehicles[0]}</p>
                  <p>Species: {item.species[0]}</p>
                  <p>Created: {item.created}</p>
                  <p>Edited: {item.edited}</p>
                  <p>Url: {item.url}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
