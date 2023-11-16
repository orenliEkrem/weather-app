import React from "react";
import "./DisplayWeather.css";

function DisplayWeather({ date, icon, mintemp, maxtemp, condition }) {
  return (
    <div className="result">
      <h2>{date}</h2>
      <ul>
        <li>
          <img src={icon} alt="weather-icon" />
        </li>
        <li>{condition}</li>
        <li>
          {mintemp} C/{maxtemp} C
        </li>
      </ul>
    </div>
  );
}

export default DisplayWeather;
