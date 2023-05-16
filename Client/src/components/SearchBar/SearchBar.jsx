import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        value={id}
        onChange={handleChange}
        className="search-input"
        placeholder="Search character by ID"
      />
      <button onClick={() => onSearch(id)} className="search-button">
        Agregar
      </button>
    </div>
  );
}
