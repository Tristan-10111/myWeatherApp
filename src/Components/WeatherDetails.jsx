import React from "react";
import { formatToLocalTime } from "../WeatherService";
import { iconUrlFromCode } from "../WeatherService";

function WeatherDetails({
	weather: {
		details,
		icon,
		temp,
		temp_min,
		temp_max,
		sunrise,
		sunset,
		speed,
		humidity,
		feels_like,
		timezone,
	},
}) {
	return (
		<div className='mt-5 mx-5'>
			<h3>Weather details</h3>
			<p>feels like : {feels_like.toFixed()} °C</p>
			<p>max temp : {temp_max.toFixed()} °C</p>
			<p>min temp : {temp_min.toFixed()} °C</p>
			<p>humidty : {humidity} %</p>
			<p className='d-flex align-items-center justify-content-between'>
				weather : {details}
				<img src={iconUrlFromCode(icon)} alt='weatherIcon' className='image' />
			</p>

			<p>wind speed : {speed.toFixed()}km/h</p>

			<p>sunrise : {formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
			<p>sunset : {formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
		</div>
	);
}

export default WeatherDetails;
