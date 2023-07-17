import React from "react";
import { FaBook } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <FaBook className="header-logo" />
      <div className="header-sections">
        <h1>M's Dictionary</h1>
      </div>
    </div>
  );
};

export default Header;
