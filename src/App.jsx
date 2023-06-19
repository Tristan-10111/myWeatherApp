import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
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
  });

  const handleClick = () => {
    if (city !== "") {
      const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c97a1cbad377d90d481b6c7e28b64173&units=metric`;

      axios
        .get(currentWeatherApi)
        .then((res) => {
          let weatherImage = "";
          switch (res.data.weather[0].main) {
            case weatherImage:
              break;

            default:
              break;
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
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="hero">
      <div className="container row">
        <div className="col-6 d-flex flex-column align-items-center mt-5">
          <h1 className="text-light">Weather App</h1>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-light"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="btn btn-outline-primary"
            onClick={handleClick}
          >
            submit
          </button>
        </div>
        <div className="col-6 text-light">
          <h3>City: {data.name}</h3>
          <h3>current Temp :{data.temp}°C</h3>
          <h3>feels like : {data.tempFeelsLike}</h3>
          <h3>max temp : {data.maxTemp}</h3>
          <h3>min temp : {data.minTemp}</h3>
          <h3>humidty : {data.humidity}</h3>
          <h3>weather : {data.weather}</h3>
          <h3>weather description : {data.weatherDiscription}</h3>
          <img src={data.weatherIcon} alt="weatherIcon" />
          <h3>wind speed : {data.windSpeed}</h3>
        </div>
      </div>
      {/* <WeatherComponent /> */}
    </div>
  );
}

export default App;
