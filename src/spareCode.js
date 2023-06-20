let weatherImage = "";
if (res.data.weather[0].main == "Clouds") {
  weatherImage = `${cloudImage}`;
} else if (res.data.weather[0].main == "Rain") {
  weatherImage = `${rainImage}`;
} else if (res.data.weather[0].main == "Mist") {
  weatherImage = "./assets/images/mistimage.jpg";
} else if (res.data.weather[0].main == "Drizzle") {
  weatherImage = "./assets/images/drizzleImage.jpg";
} else if (res.data.weather[0].main == "Clear") {
  weatherImage = `${clearImage}`;
} else {
  weatherImage = "cloudsImage";
}

// const [data, setData] = useState({
//   name: "",
//   temp: "",
//   weather: "",
//   weatherDiscription: "",
//   weatherIcon: "",
//   windSpeed: "",
//   tempFeelsLike: "",
//   maxTemp: "",
//   minTemp: "",
//   humidity: "",
//   dt: 1,
//   sunrise: 1,
//   sunset: 1,
//   timeZone: 1,
// });

// const handleClick = () => {
//   if (city !== "") {
//     const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c97a1cbad377d90d481b6c7e28b64173&units=metric`;

//     axios
//       .get(currentWeatherApi)
//       .then((res) => {
//         console.log(res);
//         setData({
//           ...data,
//           name: res.data.name,
//           temp: res.data.main.temp,
//           tempFeelsLike: res.data.main.feels_like,
//           maxTemp: res.data.main.temp_max,
//           minTemp: res.data.main.temp_min,
//           humidity: res.data.main.humidity,
//           weather: res.data.weather[0].main,
//           weatherDiscription: res.data.weather[0].description,
//           weatherIcon: res.data.weather[0].icon,
//           windSpeed: res.data.wind.speed,
//           dt: res.data.dt,
//           sunrise: res.data.sys.sunrise,
//           sunset: res.data.sys.sunset,
//           timeZone: res.data.timezone,
//         });
//         setError("");
//       })
//       .catch((err) => {
//         if (err.response.status == 404) {
//           setError(true);
//         } else if (err.response.status !== 404) {
//           setError(false);
//         }
//       });
//   }
// };
