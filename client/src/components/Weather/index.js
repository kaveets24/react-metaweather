import React, { useState, useEffect } from "react";
// css
import "./style.scss";

// SVG
import { ReactComponent as FavoriteIcon } from "../../svg/favorite.svg";


const convertTemp = (temp, unit) => {

  if (unit === "c") {
    return Math.round(temp);
  } else {
    return Math.round(temp * (9 / 5) + 32);
  }
  
};

const Weather = props => {
  const [tempUnit, setTempUnit] = useState("Units");
  const [favorite, setFavorite ] = useState();
  const symbol = tempUnit === "f" ? "°F" : "°C";

  const { handleSubmit } = props;

  const handleClick = (location) => {
   window.localStorage.setItem("favorite", location );
   setFavorite(location);

  }
  // pass 2nd argument to useEffect to simulate behavior of componentDidMount() life cylcle hook.
  useEffect((e) => {
    handleSubmit(e);
    setFavorite(window.localStorage.getItem("favorite"));
  }, []);

  let tableBody;
  let weatherClassName = "weather weather--hidden";
   
  if (props.weather && props.weather.length) {
    weatherClassName = "weather";

    
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 
    let tableRows = props.weather.map(weather => {
      // Return day as a string instead of an int.
      let day = new Date(weather.applicable_date);
      let dayString = days[day.getDay()];
      let low = convertTemp(weather.min_temp, tempUnit);
      let high = convertTemp(weather.max_temp, tempUnit);
      let currentTemp = convertTemp(weather.the_temp, tempUnit);
      

      return (
        <tr key={weather.id}>
          <td>
            <img
              alt="weather-icon"
              src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
            ></img>
          </td>
          <td>{dayString}</td>
          <td>{currentTemp}°</td>
          <td>{low}°</td>
          <td>{high}°</td>
          {/* <td>{weather.humidity}</td> */}
          <td>{Math.round(weather.wind_speed)}</td>
        </tr>
      );
    });

    tableBody = <tbody>{tableRows}</tbody>;
  }
  let loadingClassName =
    props.weather && props.weather.loading
      ? "loading"
      : "loading loading--hidden";

  let noResultsClassName =
    props.weather === undefined
      ? "no-results"
      : "no-results no-results--hidden";

  return (
    <div className="results-container">
      <div className="select">
        <div onClick={() => handleClick(props.location)} className="addFavorite"><FavoriteIcon /></div>
        <div className="favorite" onClick={props.handleSubmit}>{favorite}</div>
      <select value={tempUnit} onChange={ e => setTempUnit(e.target.value)} type="radio" name="tempUnit">
        <option value="Units" disabled>Units</option>
        <option  value="f">Fahrenheit</option>
        <option  value="c">Celsius</option>
      </select>
      </div>
      <div className={loadingClassName}></div>
      <div className={noResultsClassName}>No Results Found.</div>
      <div className={weatherClassName}>
        <table>
          <thead>
            <tr>
              <th style={{ opacity: 0 }}>Icon</th>
              <th>Day</th>
              <th>Temp<br/>{symbol}</th>
              <th>Low<br/></th>
              <th>High<br/></th>
              {/* <th>Humidity (%)</th> */}
              <th className="wind-speed">Wind<br/>(mph)</th>
            </tr>
          </thead>
          {tableBody}
        </table>
      </div>
    </div>
  );
};

export default Weather;
