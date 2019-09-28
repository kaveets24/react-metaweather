import React from "react";
import Layout from "./components/Layout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
