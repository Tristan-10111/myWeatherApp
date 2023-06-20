import React, { useEffect, useState } from "react";
import getFormattedWeatherData from "./WeatherService";
import SearchInput from "./Components/SearchInput";
import LocationAndDate from "./Components/LocationAndDate";
import WeatherDetails from "./Components/WeatherDetails";

import "./App.css";
function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [error, setError] = useState(false);
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // const message = query.q ? query.q : "current location.";

      // toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        // toast.success(
        //   `Successfully fetched weather for ${data.name}, ${data.country}.`
        // );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="hero">
      <div className="d-flex">
        <LocationAndDate weather={weather} />
      </div>
      <div className="right text-light">
        <SearchInput setQuery={setQuery} />
        <p className="text-danger">{error && <p>Invalid city name</p>}</p>

        <hr className="divider mx-5" />
        <div>
          <WeatherDetails weather={weather} />
        </div>
      </div>
    </div>
  );
}

export default App;
