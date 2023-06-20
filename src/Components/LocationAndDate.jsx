import React from "react";
import { formatToLocalTime } from "../WeatherService";

function LocationAndDate({ weather: { dt, timezone, name, country, temp } }) {
  return (
    <div className="left d-flex flex-column text-light">
      <h2 className="text-light text-left m-4">Weather Data</h2>
      <div className="leftContent mx-5 d-flex align-items-center">
        <h3>{Math.round(temp)}°C</h3>
        <h3 className="mx-3">{name}</h3>
        <p>{data.weather}</p>
        <p>local time : {formatToLocalTime(dt, timezone)}</p>
      </div>
    </div>
  );
}

export default LocationAndDate;
