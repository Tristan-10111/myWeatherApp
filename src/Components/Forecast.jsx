import React from "react";
import "../Styles/Forecast.css";
import { iconUrlFromCode } from "../WeatherService";

function Forecast({ title, items }) {
	return (
		<div className='forecast mx-5'>
			<p>{title}</p>
			<div className='d-flex align-items-center justify-content-between'>
				{items.map((item, ind) => (
					<div className='text-center' key={ind}>
						<p>{item.title}</p>
						<img
							src={iconUrlFromCode(item.icon)}
							alt='weatherIcon'
							className='image'
						/>
						<p>{item.temp.toFixed()}°C</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Forecast;
