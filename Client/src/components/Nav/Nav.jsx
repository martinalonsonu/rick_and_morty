import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../../img/ram.png";
import "./Nav.css";

function Nav({ onSearch, logOut }) {
  return (
    <div className="nav-container">
      <Link to="/home">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="nav-buttons">
        <SearchBar onSearch={onSearch} />

        <button className="nav-button">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </button>
        <button className="nav-button">
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </button>
        <button className="nav-button">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </button>
        <button className="nav-button" onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Nav;
