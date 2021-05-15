import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <ul style={{display:"inline"}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navigation;
