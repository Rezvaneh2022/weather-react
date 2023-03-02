import React from "react";

import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="container">
      <div className="wholePage">
        <span>
          <Search />
        </span>
        <div>
          <div className="row firstSection">
            <div className="col-4">
              <img src="#" id="icon" alt=" icon" />
            </div>
            <div class="col-4 city-name">
              <h1 id="city">Berlin</h1>
            </div>
            <div className="col-4">
              <div id="date" class="date"></div>
            </div>
          </div>

          <span className="temperatureSection">
            <strong id="temperature" class="weather-temperature"></strong>
            <span className="units">°C</span>
          </span>

          <ul>
            <li>
              Humidity:
              <span id="humidity"></span>
            </li>

            <li>
              Wind: <span id="wind"></span> km/h
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
}
