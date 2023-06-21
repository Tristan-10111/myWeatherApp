import React from "react";
import mistImage from "../assets/images/pexels-karol-wiśniewski-845619.jpg";
import cloudyImage from "../assets/images/pexels-pixabay-414659.jpg";
import rainyImage from "../assets/images/pexels-alice-castro-1906932.jpg";
import clearImage from "../assets/images/pexels-valiphotos-589802.jpg";

function CurrentWeatherBackground({ weather: { details } }) {
	let backImage = "";
	if (details == "Clouds") {
		backImage = `${cloudyImage}`;
	} else if (details == "Rain") {
		backImage = `${rainyImage}`;
	} else if (details == "Clear") {
		backImage = `${clearImage}`;
	} else if (details == "Mist") {
		backImage = `{${mistImage}}`;
	} else {
		backImage = `${cloudyImage}`;
	}
	return (
		<div>
			<img src={backImage} alt='bgImage' className='bgImage' /> ;
		</div>
	);
}

export default CurrentWeatherBackground;
