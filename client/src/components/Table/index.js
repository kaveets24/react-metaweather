import React from "react";

const convertTemp = temp => {
  return Math.round(temp * (9 / 5) + 32);
};

const Table = props => {
  let location = props.location ? `Current weather in ${props.location}` : "";
  let tableBody;
  if (props.weather && props.weather.length) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let tableRows = props.weather.map(weather => {
      // Return day as a String instead of a numerical representation.
      let day = new Date(weather.applicable_date);
      let dayString = days[day.getDay()];
      let low = convertTemp(weather.min_temp);
      let high = convertTemp(weather.max_temp);
      return (
        <tr key={weather.id}>
          <td>{dayString}</td>
          <td>{weather.the_temp}</td>
          <td>{weather.weather_state_name}</td>
          <td>{low} ℉</td>
          <td>{high} ℉</td>
          <td>{weather.humidity} %</td>
          <td>{weather.wind_speed}</td>

        </tr>
      );
    });

    tableBody = <tbody>{tableRows}</tbody>;
  }

  return (
    <div>
      <div className="location">{location}</div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Current Temp</th>
            <th>Condition</th>
            <th>Low</th>
            <th>High</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        {tableBody}
      </table>
    </div>
  );
};

export default Table;
