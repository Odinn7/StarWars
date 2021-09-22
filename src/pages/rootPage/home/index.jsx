import React from 'react';
import Header from '../header';
import './index.css'

export default function HomePage() {
	return (
		<div>
			<Header/>
			<div className="newHomePage">
				<img className="homeImg" src='https://data1.origin.com/asset/content/dam/originx/web/app/games/star-wars/star-wars-battlefront-2/celebration-edition/SWBF2_Celebration_Edition_pdp_prefeature_FeatureName_en_ww_v1.jpg/6ee2bf6c-c2d6-4dd7-a211-e84b67b4062f/original.jpg' />
			</div>
		</div>
	);
}
