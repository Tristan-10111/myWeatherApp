import React from "react";
// import axios from "axios";

const WeatherComponent = () => {
  // const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   fetchWeatherData();
  // }, []);

  // const fetchWeatherData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://api.m3o.com/v1/weather/Forecast",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer ZTFkODE0ZmYtYmIxYy00NzlkLTkyYmItNzEyM2UyZDI0MGIw",
  //         },
  //         params: {
  //           days: "1",
  //           location: "grassy park",
  //         },
  //       }
  //     );
  //     const data = await response.json();

  //     // Set the weather data in the state
  //     setWeatherData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // };

  return (
    <div>
      {/* Render weather data */}
      <div className="text-light">
        <h2>Weather Forecast</h2>
        <p>location: </p>
        <p>Region: </p>
        <p>Counry : </p>
        <p>local time : </p>
        <h1>Forecast</h1>
      </div>
    </div>
  );
};

export default WeatherComponent;
