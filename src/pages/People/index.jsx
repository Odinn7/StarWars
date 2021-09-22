import React, { useState, useEffect } from 'react';
import Header from '../rootPage/header';
import './index.css';

export default function People() {
	const [ people, setPeople ] = useState([]);
	const [ counter, setCount ] = useState(1);
	const [ nextPerson, setNextPerson ] = useState(false);
	const [ searchInput, setSearchInput ] = useState('');

	const peoples = async () => {
		console.log(counter);
		const database = await fetch(`https://swapi.dev/api/people/?page=${counter}`)
			.then((data) => {
				return data.json();
			})
			.catch((err) => {
				console.log(err);
			});

		if (database.next) {
			setNextPerson(true);
		}
		setPeople([...people , ...database?.results])
	};
	useEffect(() => {
		peoples();
	}, []);
	useEffect(
		() => {
			if (nextPerson) {
				peoples();
			}
		},
		[ counter ]
	);
	return (
		<div>
			<Header setSearchInput={setSearchInput} />
			<div className="peopleContainer">
						{people
							.filter((item) => {
								if (searchInput) {
									return item.name.includes(searchInput);
								} else {
									return item;
								}
							})
							.map((item) => {
								return (
									<div className="people">
										<div className="personInfo">
											<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LkDDsu9rHVknTHv98jiYCQqVs_Ntg4CLkA&usqp=CAU' />
											<p>Name: {item.name}</p>
											<p>Mass: {item.mass}</p>
											<p>Birth year: {item.birth_year}</p>
											<p>Created: {item.created}</p>
											<p>Edited: {item.edited}</p>
											<p>Eye color: {item.eye_color}</p>
											<p>Films: {item.films[0]}</p>
											<p>Gender: {item.gender}</p>
											<p>Hair color: {item.hair_color}</p>
											<p>Jeight: {item.height}</p>
											<p>Homeworld: {item.homeworld}</p>
											<p>Skin color: {item.skin_color}</p>
											<p>Species: {item.species[0]}</p>
											<p>Starships: {item.starships[0]}</p>
											<p>Vehicles: {item.vehicles[0]}</p>
										</div>
									</div>
								);
							})}
			</div>
			<div className='button'>
				<button className="loadMoreButtPeople" disabled={counter > 8} onClick={() => setCount(counter + 1)}>
					Load more
				</button>
			</div>
		</div>
	);
}
