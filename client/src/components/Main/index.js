import React from "react";
// css
import "./style.scss";

// Components Import
import Form from "../Form";
import Weather from "../Weather";





const Main = props => {
  return (
    <div className="main">
      <Form
        inputs={props.inputs}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
        weather={props.weather}
      />
      <Weather location={props.location} handleSubmit={props.handleSubmit} weather={props.weather}></Weather>
    </div>
  );
};

export default Main;
