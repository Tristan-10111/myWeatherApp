import React from "react";
import { formatToLocalTime } from "../WeatherService";
import { iconUrlFromCode } from "../WeatherService";
import { UilWind } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { UilSunset } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilTemperaturePlus } from "@iconscout/react-unicons";
import { UilTemperatureMinus } from "@iconscout/react-unicons";
import { UilTemperature } from "@iconscout/react-unicons";

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
			<h3 className='mb-4'>Weather details</h3>

			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>feels like : {feels_like.toFixed()} °C</p>
				<UilTemperature className='icons' />
			</div>
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>max temp : {temp_max.toFixed()} °C</p>
				<UilTemperaturePlus className='icons' />
			</div>
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>min temp : {temp_min.toFixed()} °C</p>
				<UilTemperatureMinus className='icons' />
			</div>
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>humidty : {humidity} %</p>
				<UilTear className='icons ' />
			</div>
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>{details}</p>
				<img src={iconUrlFromCode(icon)} alt='weatherIcon' className='icons' />
			</div>

			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>wind speed : {speed.toFixed()}km/h</p>
				<UilWind className='icons' />
			</div>

			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>sunrise : {formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
				<UilSun className='icons' />
			</div>
			<div className='d-flex align-items-center justify-content-between mb-3'>
				<p>sunset : {formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
				<UilSunset className='icons' />
			</div>
		</div>
	);
}

export default WeatherDetails;
