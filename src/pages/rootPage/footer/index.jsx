import React from 'react';
import './index.css';
export default function Footer() {
	return (
		<div className='footer'>
			<div className="footerIcons">
                
				<a href="https://www.starwars.com/">
					<img
						className="storTrupper"
						src="https://upload.wikimedia.org/wikipedia/commons/2/22/StormtrooperHelmetIcon.svg"
					/>
				</a>
				<a href="https://www.facebook.com/StarWars">
					<img
						className="facebook"
						src="https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg"
					/>
				</a>
				<a href="https://www.instagram.com/starwars/">
					<img
						className="insta"
						src="https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg"
					/>
				</a>
				<a href="https://twitter.com/starwars">
					<img
						className="twitter"
						src="https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg"
					/>
				</a>
				<a href="https://www.youtube.com/user/starwars">
					<img
						className="youTube"
						src="https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg"
					/>
				</a>
			</div>
		</div>
	);
}
