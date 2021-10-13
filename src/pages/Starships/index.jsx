import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStarships } from "../../redux/Starships/selectors";
import { setStarships } from "../../saga/Starships/action";
import Header from "../rootPage/header";
import "./index.css";

export default function Starships() {
  const [searchInput, setSearchInput] = useState("");
  const [counter, setCount] = useState(1);


  const dispatch = useDispatch();
  const starships = useSelector(selectStarships);

  useEffect(() => {
    dispatch(setStarships(counter));
  }, [counter]);

  return (
    <div>
      <Header setSearchInput={setSearchInput} />
      <div className="starshipsContainer">
        {starships
          .filter((item) => {
            if (searchInput) {
              return item.name.includes(searchInput);
            } else {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="starshipss">
                <img src="https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/icons-390.jpg" />
                <p>Name: {item.name}</p>
                <p>Model: {item.mmodelass}</p>
                <p>Manufacturer: {item.manufacturer}</p>
                <p>Cost in credits: {item.cost_in_credits}</p>
                <p>Length: {item.length}</p>
                <p>Max atmosphering speed: {item.max_atmosphering_speed}</p>
                <p>Crew: {item.crew}</p>
                <p>Passengers: {item.passengers}</p>
                <p>Cargo capacity: {item.cargo_capacity}</p>
                <p>Consumables: {item.consumables}</p>
                <p>Hyperdrive rating: {item.hyperdrive_rating}</p>
                <p>MGLT: {item.MGLT}</p>
                <p>Starship class: {item.starship_class}</p>
                <p>Pilots: {item.pilots[0]}</p>
                <p>Films: {item.films[0]}</p>
                <p>Created: {item.created}</p>
                <p>Edited: {item.edited}</p>
              </div>
            );
          })}
      </div>
      <div className="button">
        <button
          className="loadMoreButtStarships"
          disabled={counter > 3}
          onClick={() => setCount(counter + 1)}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
