import React, { useState, useEffect } from 'react';
import Header from '../rootPage/header';
import './index.css';

export default function Films() {
	const [ film, setFilms ] = useState([]);
	const [ searchInput, setSearchInput ] = useState('');

	const films = async () => {
		const database = await fetch('https://swapi.dev/api/films/')
			.then((data) => {
				return data.json();
			})
			.catch((err) => {
				console.log(err);
			});

		setFilms([...film, ...database?.results])
	};
	useEffect(() => {
		films();
	}, []);

	return (
		<div>
			<Header setSearchInput={setSearchInput} />
			<div className="filmsContainer">
				{film
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
									<img src='https://i-fakt.ru/wp-content/uploads/2013/07/ls.jpg' />
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
