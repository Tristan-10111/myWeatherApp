import React, { useEffect, useState } from "react";
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
import { UilBars } from "@iconscout/react-unicons";

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

  const handleSearchClick = () => {
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
      className={`hero d-flex`}
      style={{
        backgroundImage: `url(${backImage})`,
      }}
    >
      {/*LocationAndData left content of application */}
      <div className="left d-flex flex-column text-light  ">
        <div className="d-flex">
          <div>
            <div className="nav">
              <h2 className="text-light text-left m-4">Weather Data</h2>
              <UilBars className="burgerMenu" size="25" />
            </div>
            <div className="leftContent mx-5  d-flex align-items-center">
              <h3 className="cityTemp mx-2">{Math.round(temp)}°C</h3>
              <div className="cityAndTime">
                <h3 className="cityName">{`${name}`}</h3>
                <p className="cityTimeZone">
                  {" "}
                  {formatToLocalTime(dt, timezone)}
                </p>
              </div>

              <div className="weatherAndIcon ">
                <img
                  src={iconUrlFromCode(icon)}
                  alt="weatherIcon"
                  className="image"
                />
                <p className="weather">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*locationAndDate left content ends here */}
      {/* Right content starts here */}
      <div className="right text-light md:hidden">
        {/* SearchInput starts here */}
        <div className="search m-3 d-flex mx-5">
          <input
            type="text"
            className="input"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleSearchClick}
          >
            <UilSearch size="30" />
          </button>
        </div>
        {/* Search input ends here */}
        <hr className="divider mx-5" />

        <div>
          <>
            {/* My weather details start here */}
            <div className="mt-5 mx-5">
              <h3 className="mb-4">Weather details</h3>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>feels like : {Math.round(feels_like)} °C</p>
                <UilTemperature className="icons" />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>max temp : {temp_max.toFixed()} °C</p>
                <UilTemperaturePlus className="icons" />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>min temp : {temp_min.toFixed()} °C</p>
                <UilTemperatureMinus className="icons" />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>humidty : {humidity} %</p>
                <UilTear className="icons " />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>{details}</p>
                <img
                  src={iconUrlFromCode(icon)}
                  alt="weatherIcon"
                  className="icons"
                />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>wind speed : {speed.toFixed()}km/h</p>
                <UilWind className="icons" />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>
                  sunrise : {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                </p>
                <UilSun className="icons" />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p>sunset : {formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
                <UilSunset className="icons" />
              </div>
            </div>
            {/* My weather details end here */}
            <hr className="divider mx-5" />
            {/* my hourly forecast starts here */}
            <div className="forecast mx-4">
              <h3 className="mb-4 mx-4">Hourly forecast</h3>
              <div className="d-flex align-items-center justify-content-between">
                {hourly.map((hour, ind) => (
                  <div className="text-center m-3" key={ind}>
                    <p>{hour.title}</p>
                    <img
                      src={iconUrlFromCode(hour.icon)}
                      alt="weatherIcon"
                      className="image"
                    />
                    <p>{hour.temp.toFixed()}°C</p>
                  </div>
                ))}
              </div>
            </div>
            {/* My hourly forecast ends here */}
            <hr className="divider mx-5" />
            {/* My daily forecast starts here */}
            <div className="forecast mx-4">
              <h3 className="mb-4 mx-4">Daily forecast</h3>
              <div className="d-flex align-items-center justify-content-between">
                {daily.map((day, ind) => (
                  <div className="text-center m-3" key={ind}>
                    <p>{day.title}</p>
                    <img
                      src={iconUrlFromCode(day.icon)}
                      alt="weatherIcon"
                      className="image"
                    />
                    <p>{day.temp.toFixed()}°C</p>
                  </div>
                ))}
              </div>
            </div>
            {/* my daily forecast ends here */}
            <hr className="divider mx-5" />
          </>
        </div>
      </div>
      {/* Right content ends here */}
    </div>
  );
}

export default MainComponent;
