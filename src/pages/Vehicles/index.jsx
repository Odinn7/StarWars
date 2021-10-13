import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicles } from "../../redux/Vehicles/selectors";
import { setVehicles } from "../../saga/Vehicles/action";
import Header from "../rootPage/header";
import "./index.css";

export default function Vehicles() {
  const [searchInput, setSearchInput] = useState("");
  const [counter, setCount] = useState(1);

  const dispatch = useDispatch();
  const vehicles = useSelector(selectVehicles);

  useEffect(() => {
    dispatch(setVehicles(counter));
  }, [counter]);

  return (
    <div>
      <Header setSearchInput={setSearchInput} />
      <div className="vehiclesContainer">
        {vehicles
          .filter((item) => {
            if (searchInput) {
              return item.name.includes(searchInput);
            } else {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="vehicless">
                <img src="https://i.ytimg.com/vi/5Lb7tWr1ZZk/mqdefault.jpg" />
                <p>Name: {item.name}</p>
                <p>Model: {item.model}</p>
                <p>manufacturer: {item.manufacturer}</p>
                <p>Cost in credits: {item.cost_in_credits}</p>
                <p>Length: {item.length}</p>
                <p>Max atmosphering speed: {item.max_atmosphering_speed}</p>
                <p>Crew: {item.crew}</p>
                <p>Passengers: {item.passengers}</p>
                <p>Cargo_capacity: {item.cargo_capacity}</p>
                <p>Consumables: {item.consumables}</p>
                <p>Vehicle_class: {item.vehicle_class}</p>
                <p>Pilots: {item.pilots}</p>
                <p>Films: {item.films[0]}</p>
                <p>Created: {item.created}</p>
                <p>Edited: {item.edited}</p>
              </div>
            );
          })}
      </div>
      <div className="button">
        <button
          className="loadMoreButtVehicles"
            disabled={counter > 3}
            onClick={() => setCount(counter + 1)}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
