import React from "react";
import { formatToLocalTime } from "../WeatherService";

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
    <div className="mt-5 mx-5">
      <h3>Weather details</h3>
      <p>feels like : {Math.round(data.tempFeelsLike)} °C</p>
      <p>max temp : {Math.round(data.maxTemp)} °C</p>
      <p>min temp : {Math.round(data.minTemp)} °C</p>
      <p>humidty : {data.humidity} %</p>
      <p>weather : {data.weather}</p>
      <p>weather description : {data.weatherDiscription}</p>
      <img src={data.image} alt="weatherIcon" className="image" />
      <p>wind speed : {Math.round(data.windSpeed)}km/h</p>

      <p>
        sunrise : {formatToLocalTime(data.sunrise, data.timeZone, "hh:mm a")}
      </p>
      <p>sunset : {formatToLocalTime(data.sunset, data.timeZone, "hh:mm a")}</p>
    </div>
  );
}

export default WeatherDetails;
