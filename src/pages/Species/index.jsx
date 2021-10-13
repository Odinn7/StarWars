import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSpecies } from "../../redux/Species/selectors";
import { setSpecies } from '../../saga/Species/action'
import Header from "../rootPage/header";
import "./index.css";

export default function Species() {
  const [searchInput, setSearchInput] = useState("");
  const [counter, setCount] = useState(1);

  
  const dispatch = useDispatch();
  const species = useSelector(selectSpecies);

  useEffect(() => {
    dispatch(setSpecies(counter));
  }, [counter]);

  return (
    <div>
      <Header setSearchInput={setSearchInput} />
      <div className="speciesContainer">
        {species
          .filter((item) => {
            if (searchInput) {
              return item.name.includes(searchInput);
            } else {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="speciess">
                <img src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/12/18/151218155450_star_wars_fans_germany_624x415_afp_nocredit.jpg" />
                <p>Name: {item.name}</p>
                <p>Classification: {item.classification}</p>
                <p>Designation: {item.designation}</p>
                <p>Average height: {item.average_height}</p>
                <p>Skin colors: {item.skin_colors}</p>
                <p>Eye color: {item.eye_colors}</p>
                <p>Hair colors: {item.hair_colors[0]}</p>
                <p>Average lifespan: {item.average_lifespan}</p>
                <p>Homeworld: {item.homeworld}</p>
                <p>Language: {item.language}</p>
                <p>People: {item.people[0]}</p>
                <p>Films: {item.films[0]}</p>
                <p>Created: {item.created}</p>
                <p>Edited: {item.edited}</p>
              </div>
            );
          })}
      </div>
      <div className="button">
        <button
          className="loadMoreButtSpecies"
            disabled={counter > 3}
            onClick={() => setCount(counter + 1)}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
