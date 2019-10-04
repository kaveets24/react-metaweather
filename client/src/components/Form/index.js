import React from "react";

import "./style.scss";

const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="location"></label>
      <input
        required
        onChange={props.handleInputChange}
        id="location"
        name="location"
        type="text"
        placeholder="Enter a city name."
        value={props.inputs.location}
      ></input>
      <button type="submit">Go</button>
    </form>
  );
};

export default Form;
