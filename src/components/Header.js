import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui container center">
      <div className="ui fixed menu">
        <Link to={`/`}>
          <h2 style = {{color: "black"}}>PhoneBook</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
