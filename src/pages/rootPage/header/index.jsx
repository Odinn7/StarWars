import React from 'react';
import './index.css';
import swordImage from '../../../assets/swordImage.jpg';
import { Link } from 'react-router-dom';

function Header({ setSearchInput }) {
	return (
		<div className="minePage">
			<header>
				<Link to="/" activeClassName="homePage" className="homePage">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.svg.png"
						alt="headerImage"
					/>
				</Link>
				<div className='search'>
				<img className="swordImage" src={swordImage} alt="swordImage" />
				<input
					className="searchPannel"
					type="text"
					placeholder="May the force be with you"
					onChange={(event) => setSearchInput(event.target.value)}
				/>
				</div>
				<ul className="naviBar">
					<li>
						<Link to="/people" activeClassName="people" className="peoples">
							People
						</Link>
					</li>
					<li>
						<Link to="/planets" activeClassName="planets" className="planets">
							Planets
						</Link>
					</li>
					<li>
						<Link to="/films" activeClassName="films" className="films">
							Films
						</Link>
					</li>
					<li>
						<Link to="/species" activeClassName="species" className="species">
							Species
						</Link>
					</li>
					<li>
						<Link to="/vehicles" activeClassName="vehicles" className="vehicles">
							Vehicles
						</Link>
					</li>
					<li>
						<Link to="/starships" activeClassName="starships" className="starships">
							Starships
						</Link>
					</li>
				</ul>
			</header>
		</div>
	);
}

export default Header;
