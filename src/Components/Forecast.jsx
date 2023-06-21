import React from "react";
import "../Styles/Forecast.css";
import { iconUrlFromCode } from "../WeatherService";

function Forecast({ title, items }) {
	return (
		<div className='forecast mx-4'>
			<h3 className='mb-4 mx-4'>{title}</h3>
			<div className='d-flex align-items-center justify-content-between'>
				{items.map((item, ind) => (
					<div className='text-center m-3' key={ind}>
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
