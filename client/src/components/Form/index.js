import React from "react";


const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="location"></label>
      <input
        onChange={props.handleInputChange}
        id="location"
        name="location"
        type="text"
        placeholder="Enter the name of your city."
        value={props.inputs.location}
      ></input>
      <button type="submit">Go</button>
    </form>
  );
};

export default Form;
