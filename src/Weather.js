import React, { useState } from "react";
import FormattedDate from "./formattedDate";
import axios from "axios";

import "./App.css";
import Search from "./Search";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      icon: `${response.data.condition.icon_url}`,
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <span>
          <Search />
        </span>
        <div>
          <div className="row firstSection">
            <div className="col-4">
              <img src={weatherData.icon} id="icon" alt=" icon" />
            </div>
            <div class="col-4 city-name">
              <h1 id="city">{weatherData.city}</h1>
            </div>
            <div className="col-4">
              <div id="date" class="date">
                <FormattedDate />
              </div>
            </div>
          </div>

          <span className="temperatureSection">
            <strong id="temperature" class="weather-temperature">
              {Math.round(weatherData.temperature)}
            </strong>
            <span className="units">°C</span>
          </span>

          <ul className="text-muted ">
            <li>
              Description:{" "}
              <span id="description">{weatherData.description}</span>
            </li>
            <li>
              Humidity:{" "}
              <span id="humidity">{Math.round(weatherData.humidity)}</span>
            </li>

            <li>
              Wind: <span id="wind">{Math.round(weatherData.wind)}</span> km/h
            </li>
          </ul>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    );
  } else {
    const apiKey = "588oc041a6e953f45658b7911bf5tb98";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <h2>Loading the app ...</h2>;
  }
}
