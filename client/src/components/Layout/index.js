import React, { useState, useEffect } from "react";
import "./style.scss";

import { MetaWeather } from "../../api/metaweather";

// Component Imports
import Header from "../Header";
import Main from "../Main";
import useForm from "../../hooks";

const Layout = () => {
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    weather,
    location
  } = useForm(MetaWeather.getLocation);

  useEffect(() => console.log("Weather: ", weather));

  return (
    <div>
      <Header />
      <Main
        inputs={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        weather={weather}
        location={location}
      />
    </div>
  );
};

export default Layout;
