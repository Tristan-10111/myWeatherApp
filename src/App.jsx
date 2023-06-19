import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import clearImage from "../src/assets/images/clearImage.png";
import rainImage from "../src/assets/images/rainImage.jpg";
import cloudImage from "../src/assets/images/cloudsImage.jpg";
import { Input, Button, css } from "@nextui-org/react";

function App() {
	const [city, setCity] = useState("");
	const [error, setError] = useState(false);
	const [data, setData] = useState({
		name: "",
		temp: "",
		weather: "",
		weatherDiscription: "",
		weatherIcon: "",
		windSpeed: "",
		tempFeelsLike: "",
		maxTemp: "",
		minTemp: "",
		humidity: "",
		image: "",
	});

	const handleClick = () => {
		if (city !== "") {
			const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c97a1cbad377d90d481b6c7e28b64173&units=metric`;

			axios
				.get(currentWeatherApi)
				.then((res) => {
					let weatherImage = "";
					if (res.data.weather[0].main == "Clouds") {
						weatherImage = `${cloudImage}`;
					} else if (res.data.weather[0].main == "Rain") {
						weatherImage = `${rainImage}`;
					} else if (res.data.weather[0].main == "Mist") {
						weatherImage = "./assets/images/mistimage.jpg";
					} else if (res.data.weather[0].main == "Drizzle") {
						weatherImage = "./assets/images/drizzleImage.jpg";
					} else if (res.data.weather[0].main == "Clear") {
						weatherImage = `${clearImage}`;
					} else {
						weatherImage = "cloudsImage";
					}

					setData({
						...data,
						name: res.data.name,
						temp: res.data.main.temp,
						tempFeelsLike: res.data.main.feels_like,
						maxTemp: res.data.main.temp_max,
						minTemp: res.data.main.temp_min,
						humidity: res.data.main.humidity,
						weather: res.data.weather[0].main,
						weatherDiscription: res.data.weather[0].description,
						weatherIcon: res.data.weather[0].icon,
						windSpeed: res.data.wind.speed,
						image: weatherImage,
					});
					setError("");
				})
				.catch((err) => {
					if (err.response.status == 404) {
						setError(true);
					} else if (err.response.status !== 404) {
						setError(false);
					}
				});
		}
	};

	return (
		<div className='hero'>
			<div className='d-flex'>
				<div className='left d-flex flex-column text-light'>
					<h2 className='text-light text-left m-4'>Weather Data</h2>
					<div className='leftContent mx-5 d-flex align-items-center'>
						<h3>{Math.round(data.temp)}°C</h3>
						<h3 className='mx-3'>{data.name}</h3>
						<p>{data.weather}</p>
					</div>
				</div>
				<div className='right text-light'>
					<div className='search m-3 d-flex mx-5'>
						<input
							type='text'
							className='input  '
							placeholder='Enter your city'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<button
							className='btn btn-secondary'
							type='button'
							onClick={handleClick}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='30'
								height='30'
								viewBox='0,0,256,256'
								className='icon'>
								<g
									fill='#ffffff'
									fill-rule='nonzero'
									stroke='none'
									stroke-width='2'
									stroke-linecap='butt'
									stroke-linejoin='miter'
									stroke-miterlimit='10'
									stroke-dasharray=''
									stroke-dashoffset='0'
									font-family='none'
									font-weight='none'
									font-size='none'
									text-anchor='none'
									className='icon'>
									<g transform='scale(5.12,5.12)'>
										<path d='M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z'></path>
									</g>
								</g>
							</svg>
						</button>
					</div>
					<p className='text-danger'>{error && <p>Invalid city name</p>}</p>
					<div className='mt-5 mx-5'>
						<h3>Weather details</h3>
						<p>feels like : {Math.round(data.tempFeelsLike)} °C</p>
						<p>max temp : {Math.round(data.maxTemp)} °C</p>
						<p>min temp : {Math.round(data.minTemp)} °C</p>
						<p>humidty : {data.humidity}</p>
						<p>weather : {data.weather}</p>
						<p>weather description : {data.weatherDiscription}</p>
						<img src={data.image} alt='weatherIcon' className='image' />
						<p>wind speed : {Math.round(data.windSpeed)}/kmh</p>
					</div>
					<hr className='divider mx-5' />
					<div>
						<h3 className='mx-5'>5 day forecast</h3>
					</div>
				</div>
			</div>
			{/* <WeatherComponent /> */}
		</div>
	);
}

export default App;
