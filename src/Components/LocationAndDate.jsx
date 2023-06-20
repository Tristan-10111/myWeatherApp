import React from "react";
import { formatToLocalTime } from "../WeatherService";
import { iconUrlFromCode } from "../WeatherService";
import "../Styles/locationAndDate.css";

function LocationAndDate({
	weather: { dt, timezone, name, temp, icon, details },
}) {
	return (
		<div>
			<h2 className='text-light text-left m-4'>Weather Data</h2>
			<div className='leftContent mx-5  d-flex align-items-center'>
				<h3 className='cityName mx-2'>{Math.round(temp)}°C</h3>
				<div className='d-flex flex-column align-items-left mx-2'>
					<h3>{`${name}`}</h3>
					<p> {formatToLocalTime(dt, timezone)}</p>
				</div>

				<div className='d-flex flex-column align-items-center mx-2 mb-3'>
					<img
						src={iconUrlFromCode(icon)}
						alt='weatherIcon'
						className='image'
					/>
					<p>{details}</p>
				</div>
			</div>
		</div>
	);
}

export default LocationAndDate;
