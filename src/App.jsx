import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import getFormattedWeatherData from "./WeatherService";
import Hero from "./Components/Hero";

function App() {
	const [query, setQuery] = useState({ q: "england" });
	const [error, setError] = useState(false);
	const [units, setUnits] = useState("metric");
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data);
			});
		};

		fetchWeather();
	}, [query, units]);

	return (
		<div>
			<div className='hero d-flex'>
				{weather && <Hero weather={weather} setQuery={setQuery} />}
			</div>
		</div>
	);
}

export default App;
