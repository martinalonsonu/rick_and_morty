import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div>
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
