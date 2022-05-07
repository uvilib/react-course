import React from "react";
import "./search-panel.css";

const SearchPanel: React.FC = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="search"
    />
  );
};

export default SearchPanel;
