const api_key = "c97a1cbad377d90d481b6c7e28b64173";

export const fetchData = (url, callback) => {
  fetch(`${url}&appid=${api_key}`)
    .then((res) => res.json())
    .then((res) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },

  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  /// search query eg: Cape town , Durban
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
