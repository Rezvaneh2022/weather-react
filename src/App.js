import React, { useState } from "react";
import "./Weather.css";

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wholePage">
          <Weather defaultCity="New York" />

          <footer>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/rezvaneh-hosseini-5b36871b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rezvaneh Hosseini{" "}
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Rezvaneh2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://reliable-baklava-491aae.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
