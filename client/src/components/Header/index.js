import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = props => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
