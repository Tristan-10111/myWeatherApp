import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import getFormattedWeatherData from "./WeatherService";
import MainComponent from "./Components/MainComponent";

function App() {
  const [query, setQuery] = useState({ q: "cape town" });
  const [error, setError] = useState(false);
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  return (
    <div>
      <div className="hero d-flex">
        {weather && <MainComponent weather={weather} setQuery={setQuery} />}
      </div>
    </div>
  );
}

export default App;
