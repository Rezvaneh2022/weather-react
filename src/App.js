import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import Search from "./Search";

export default function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      icon: `${response.data.condition.icon_url}`,
      description: response.data.condition.description,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="wholePage">
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
                <div id="date" class="date"></div>
              </div>
            </div>

            <span className="temperatureSection">
              <strong id="temperature" class="weather-temperature">
                {Math.round(weatherData.temperature)}
              </strong>
              <span className="units">°C</span>
            </span>

            <ul>
              <li>
                Description:{" "}
                <span id="description" class="text-muted">
                  {weatherData.description}
                </span>
              </li>
              <li>
                Humidity:{" "}
                <span id="humidity" class="text-muted">
                  {Math.round(weatherData.humidity)}
                </span>
              </li>

              <li>
                Wind:{" "}
                <span id="wind" className="text-muted !imortant">
                  {Math.round(weatherData.wind)}
                </span>{" "}
                km/h
              </li>
            </ul>
          </div>
          <div className="weather-forecast" id="forecast"></div>
          <a
            href="hhttp://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            target="_blank"
            className="gitLink"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by Rezvaneh Hosseini
        </div>
      </div>
    );
  } else {
    const apiKey = "588oc041a6e953f45658b7911bf5tb98";
    let city = "Tehran";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <h2>Loading the app ...</h2>;
  }
}
