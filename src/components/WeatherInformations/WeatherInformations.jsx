/* eslint-disable react/prop-types */
import "./WeatherInformations.css";

function WeatherInformations({ weather }) {
  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="description">{weather.weather[0].description}</p>
      <div className="details">
        <p>Feels Like: {Math.round(weather.main.feels_like)}</p>
        <p>Humidity: {weather.main.humidity}</p>
        <p>Pressure: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInformations;