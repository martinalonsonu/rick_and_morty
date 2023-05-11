import React from "react";
import "./Error404.css";

function Error404() {
  return (
    <div className="error-container">
      <img
        className="error-img"
        src="https://i.imgur.com/Q2BAOd2.png"
        alt="Rick y Morty"
      />
      <h1 className="error-text">ERROR 404, PÁGINA NO ENCONTRADA</h1>
    </div>
  );
}

export default Error404;
