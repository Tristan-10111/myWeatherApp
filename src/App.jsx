import React, { useEffect, useState } from "react";
// import getFormattedWeatherData from "./WeatherService";
import SearchInput from "./Components/SearchInput";
import LocationAndDate from "./Components/LocationAndDate";
import WeatherDetails from "./Components/WeatherDetails";
import Forecast from "./Components/Forecast";
import "./Styles/App.css";
import getFormattedWeatherData from "./WeatherService";
function App() {
	const [query, setQuery] = useState({ q: "grassy park" });
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
				<div className='left d-flex flex-column text-light'>
					<div className='d-flex'>
						{weather && <LocationAndDate weather={weather} />}
					</div>
				</div>
				<div className='right text-light'>
					<SearchInput setQuery={setQuery} />
					<p className='text-danger'>{error && <p>Invalid city name</p>}</p>

					<hr className='divider mx-5' />
					<div>
						{weather && (
							<>
								{" "}
								<WeatherDetails weather={weather} />{" "}
								<Forecast title='hourly forecast' items={weather.hourly} />
								<Forecast title='daily forecast' items={weather.daily} />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
