import React from "react";
import "./header.css";

import SearchBar from "./SearchBar";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="header" className="header d-flex fixed-top align-items-center">
      {/* search bar */}
      <SearchBar />
      {/* nav */}
      <Nav />
    </header>
  );
};

export default Header;
