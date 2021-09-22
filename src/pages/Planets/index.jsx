import React, { useState, useEffect } from 'react';
import Header from '../rootPage/header';
import './index.css';

export default function Planet() {
	const [ planet, setPlanet ] = useState([]);
	const [ counter, setCount ] = useState(1);
	const [ nextPlanet, setNextPlanet ] = useState(false);
	const [ searchInput, setSearchInput ] = useState('');

	const planets = async () => {
		console.log(counter);
		const database = await fetch(`https://swapi.dev/api/planets/?page=${counter}`)
			.then((data) => {
				return data.json();
			})
			.catch((err) => {
				console.log(err);
			});

		if (database.next) {
			setNextPlanet(true);
		}
		setPlanet([...planet , ...database?.results])
	};
	useEffect(() => {
		planets();
	}, []);
	useEffect(
		() => {
			if (nextPlanet) {
				planets();
			}
		},
		[ counter ]
	);

	return (
		<div>
			<Header setSearchInput={setSearchInput} />
			<div className="planetContainer">
				{planet
					.filter((item) => {
						if (searchInput) {
							return item.name.includes(searchInput);
						} else {
							return item;
						}
					})
					.map((item) => {
						return (
							<div className="planet">
								<div className="planetInfo">
									<img src='data:image/jpeg;base64,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' />
									<p>Name: {item.name}</p>
									<p>Rotation period: {item.rotation_period}</p>
									<p>Orbital period: {item.orbital_period}</p>
									<p>Diameter: {item.diameter}</p>
									<p>Climate: {item.climate}</p>
									<p>Gravity: {item.gravity}</p>
									<p>Terrain: {item.terrain}</p>
									<p>Surface_water: {item.surface_water}</p>
									<p>Population: {item.population}</p>
									<p>Residents: {item.residents[0]}</p>
									<p>Films: {item.films[0]}</p>
									<p>Created: {item.created}</p>
									<p>Edited: {item.edited}</p>
									<p>Url: {item.url}</p>
								</div>
							</div>
						);
					})}
			</div>
			<div className='button'>
				<button className="loadMoreButtPlanets" disabled={counter > 5} onClick={() => setCount(counter + 1)}>
					Load more
				</button>
			</div>
		</div>
	);
}
