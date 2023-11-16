import React, { useState } from "react";
import "./App.css";
import DisplayWeather from "./DisplayWeather";
function App() {
  const APP_KEY = "e85518ec783f427684561728231611";
  let cityInput = "";
  const [wheatherData, setWeatherData] = useState([]);

  //inputtan şehir ismini al
  function cityText() {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      cityInput = e.target.value;
    });
  }

  //verileri getir, state e aktar
  async function getData(value) {
    if (value === "") return;
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`
    );
    const result = await data.json();
    setWeatherData(result.forecast.forecastday);
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a city..."
          onChange={cityText}
        />
        <button onClick={() => getData(cityInput)}>Search</button>
      </div>
      <div>
        {wheatherData.map((item) => (
          <DisplayWeather
            key={item.date}
            date={item.date}
            icon={item.day.condition.icon}
            mintemp={item.day.mintemp_c}
            maxtemp={item.day.maxtemp_c}
            condition={item.day.condition.text}
          />
        ))}
      </div>
    </>
  );
}

export default App;
