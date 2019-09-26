import React, { useState } from "react";
import "./style.scss";

// Component Imports
import Header from "../Header";

const Layout = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <Header></Header>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Layout;
