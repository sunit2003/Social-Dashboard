import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form
        className="search-form d-flex justify-content-end align-items-end"
        method="POST"
        action="#"
      >
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Search Anything"
        />
        <button type="submit" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
