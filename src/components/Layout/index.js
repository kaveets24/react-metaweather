import React, { useState } from "react";
import "./style.scss";

// Component Imports
import Header from "../Header";
import Main from "../Main";

const Layout = () => {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Layout;
