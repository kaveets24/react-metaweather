import React from "react";

// Components Import
import Form from "../Form";
import Table from "../Table";

const Main = props => {
  return (
    <main>
      <Form
        inputs={props.inputs}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
        weather={props.weather}
      />
      <Table location={props.location} weather={props.weather}></Table>
    </main>
  );
};

export default Main;
