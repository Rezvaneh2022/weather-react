import React from "react";

export default function Search(props) {
  return (
    <div>
      <span>
        <form id="search-form">
          <input
            type="text"
            placeholder="Enter a city"
            className="searchBar"
            autocomplete="off"
            id="city-input"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
      </span>
    </div>
  );
}
