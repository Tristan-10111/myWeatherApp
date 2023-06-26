import React, { useState } from "react";
// import SearchInput from "./SearchInput";
// import LocationAndDate from "./LocationAndDate";
// import WeatherDetails from "./WeatherDetails";
// import Forecast from "./Forecast";
import mistImage from "../assets/images/pexels-karol-wiśniewski-845619.jpg";
import cloudyImage from "../assets/images/pexels-pixabay-414659.jpg";
import rainyImage from "../assets/images/pexels-alice-castro-1906932.jpg";
import clearImage from "../assets/images/pexels-porapak-apichodilok-348521.jpg";
import { formatToLocalTime } from "../WeatherService";
import { iconUrlFromCode } from "../WeatherService";
import { UilWind } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { UilSunset } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilTemperaturePlus } from "@iconscout/react-unicons";
import { UilTemperatureMinus } from "@iconscout/react-unicons";
import { UilTemperature } from "@iconscout/react-unicons";
import { UilSearch } from "@iconscout/react-unicons";
import search from "../assets/images/icons8-search.svg";
import close from "../assets/images/close.svg";

function MainComponent({
	setQuery,
	weather: {
		details,
		hourly,
		daily,
		dt,
		timezone,
		name,
		temp,
		icon,
		temp_min,
		temp_max,
		sunrise,
		sunset,
		speed,
		humidity,
		feels_like,
	},
}) {
	const [city, setCity] = useState("");
	const [sideBar, setSideBar] = useState(false);

	const handleSearchClick = (e) => {
		e.preventDefault();
		if (city !== "") setQuery({ q: city });
	};

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
		<div
			className={`desktop:w-full desktop:flex desktop:flex-row phone:w-full phone-flex phone-flex-row`}
			style={{
				backgroundImage: `url(${backImage})`,
				backgroundSize: "cover",
			}}>
			{/*LocationAndData left content of application */}
			<div className='leftOverflow desktop:w-9/12 desktop:flex desktop:flex-col desktop:text-white'>
				<div className='desktop:flex phone:flex'>
					<div>
						<div className='nav'>
							<h2 className='text-light text-left m-4 text-xl'>Weather</h2>
							<img
								src={sideBar ? close : search}
								alt='menu'
								className='desktop:invisible phone:visible phone:bg-transparent phone:w-9 phone:mr-20 z-20 menuBtn phone:mt-3'
								onClick={() => setSideBar(!sideBar)}
							/>
							{/* <button onClick={handleSideBarClose}>X</button> */}
						</div>
						{/* left content Details */}
						<div className='desktop:flex desktop:flex-row desktop:items-center desktop:my-96 desktop:mx-2  phone:flex phone:flex-col phone:items-center phone-justify-center phone:my-96 phone:-mx-16'>
							<h3 className='desktop:mx-2 desktop:text-8xl desktop:mt-36 phone:text-6xl phone:-ml-28'>
								{Math.round(temp)}°C
							</h3>
							<div className='desktop:mx-1 desktop:mt-36 phone:mx-20'>
								<h3 className='desktop:mx-1 desktop:text-3xl phone:mx-6 phone:text-2xl'>{`${name}`}</h3>
								<p className='desktop:mx-2  phone:mx-6'>
									{" "}
									{formatToLocalTime(dt, timezone)}
								</p>
							</div>

							<div className='desktop:flex desktop:flex-col desktop:mx-4 desktop:mb-4 desktop:mt-36 phone:flex phone:flex-row phone:items-center phone:-ml-20'>
								<img
									src={iconUrlFromCode(icon)}
									alt='weatherIcon'
									className='image'
								/>
								<p className='weather'>{details}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*locationAndDate left content ends here */}
			{/* Right content starts here */}
			{/* {siderBar && ( */}
			<div
				className={` ${
					!sideBar ? "invisible" : "visible"
				} detailsBg desktop:w-6/12 desktop:visible desktop:mt-0 desktop:absolute desktop:top-0 desktop:right-0 text-white phone:w-full  phone:-mt-96 phone:relative phone:-top-full phone:bottom-0 z-80`}>
				{/* SearchInput starts here */}
				<form
					className='search desktop:m-3 desktop:flex  desktop:mx-5 desktop:mt-6 phone:m-3 phone:flex phone:mx-5 phone:mt-72'
					onSubmit={handleSearchClick}>
					<input
						type='text'
						className='input'
						placeholder='Enter your city'
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<button
						className='btn btn-secondary'
						type='button'
						onClick={handleSearchClick}>
						<UilSearch size='30' />
					</button>
				</form>
				{/* Search input ends here */}
				{/* <hr className='divider mx-5' />
				<button className='bg-transparent closeBtn'>
					<UilTimes className='burgerMenu' size='30' />
				</button> */}

				<div>
					<>
						{/* My weather details start here */}
						<div className='mt-5 mx-5'>
							<h3 className='mt-6 desktop:mb-5 desktop:mx-4 desktop:text-3xl phone:mx-4 phone:mb-5 phone:text-3xl'>
								Weather details
							</h3>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-6 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-6 phone:ml-4'>
								<p>feels like : </p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p>{Math.round(feels_like)} °C</p>
									<UilTemperature className='icons' />
								</div>
							</div>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-6 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-6 phone:ml-4'>
								<p>max temp : </p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p>{temp_max.toFixed()} °C</p>
									<UilTemperaturePlus className='icons' />
								</div>
							</div>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-6 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-6 phone:ml-4'>
								<p>min temp : </p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p>{temp_min.toFixed()} °C</p>
									<UilTemperatureMinus className='icons' />
								</div>
							</div>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-4 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-4 phone:ml-4'>
								<p>humidty : </p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p>{humidity} %</p>
									<UilTear className='icons' />
								</div>
							</div>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-4 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-4 phone:ml-4'>
								<p>Details :</p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p>{details}</p>
									<img
										src={iconUrlFromCode(icon)}
										alt='weatherIcon'
										className='icons'
									/>
								</div>
							</div>

							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-6 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-4 phone:ml-4'>
								<p>wind speed :</p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p> {speed.toFixed()}km/h</p>
									<UilWind className='icons' />
								</div>
							</div>

							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-6 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-6 phone:ml-4'>
								<p>sunrise :</p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
									<UilSun className='icons' />
								</div>
							</div>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:mb-6 desktop:ml-4 phone:flex phone:items-center phone:justify-between phone:mb-6 phone:ml-4'>
								<p>sunset : </p>
								<div className='desktop:flex desktop:items-center phone:flex phone:items-center'>
									<p>{formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
									<UilSunset className='icons' />
								</div>
							</div>
						</div>
						{/* My weather details end here */}
						<hr className='desktop:w-11/12 desktop:mx-5 desktop:mb-5 phone:w-11/12 phone:mx-4 phone:mb-5' />
						{/* my hourly forecast starts here */}
						<div className='desktop:w-6/12 desktop:mx-4 phone:mx-4 phone:w-7/12 '>
							<h3 className=' mt-6 desktop:mb-4 desktop:mx-4 desktop:text-3xl phone:mb-4 phone:mx-4 phone:text-2xl'>
								Hourly forecast
							</h3>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:w-96 phone:flex phone:items-center phone:justify-between phone:w-96'>
								{hourly.map((hour, ind) => (
									<div
										className='text-center desktop:m-5 desktop:w-96 phone:m-5 phone:w-96'
										key={ind}>
										<p className='desktop:w-24 phone:w-9'>{hour.title}</p>
										<img
											src={iconUrlFromCode(hour.icon)}
											alt='weatherIcon'
											className='desktop:w-32'
										/>
										<p>{hour.temp.toFixed()}°C</p>
									</div>
								))}
							</div>
						</div>
						{/* My hourly forecast ends here */}
						<hr className='desktop:w-11/12 desktop:mx-5 desktop:mb-5 phone:w-11/12 phone:mx-4 phone:mb-5' />
						{/* My daily forecast starts here */}
						<div className='desktop:w-6/12 desktop:mx-4 phone:mx-4 phone:w-7/12'>
							<h3 className='mt-6 desktop:mb-4 desktop:mx-4 desktop:text-3xl phone:mb-4 phone:mx-4 phone:text-2xl'>
								Daily forecast
							</h3>
							<div className='desktop:flex desktop:items-center desktop:justify-between desktop:w-96 phone:flex phone:items-center phone:justify-between phone:w-96'>
								{daily.map((day, ind) => (
									<div
										className='text-center desktop:m-5 desktop:w-96 phone:m-5 phone:w-96'
										key={ind}>
										<p className='desktop:w-24 phone:w-9'>{day.title}</p>
										<img
											src={iconUrlFromCode(day.icon)}
											alt='weatherIcon'
											className='desktop:w-32'
										/>
										<p>{day.temp.toFixed()}°C</p>
									</div>
								))}
							</div>
						</div>
						{/* my daily forecast ends here */}
						<hr className='desktop:w-11/12 desktop:mx-5 desktop:mb-5 phone:w-11/12 phone:mx-4 phone:mb-5' />
					</>
				</div>
			</div>
			{/* )} */}
			{/* Right content ends here */}
		</div>
	);
}

export default MainComponent;
