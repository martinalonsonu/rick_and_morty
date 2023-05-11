import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="detail-container">
      <h1>Detail Character</h1>
      {character ? (
        <div>
          <div className="detail-info">
            <div className="detail-text">
              <h2>Name: {character.name}</h2>
              <h2>Status: {character.status}</h2>
              <h2>Species: {character.species}</h2>
              <h2>Gender: {character.gender}</h2>
              <h2>Origin: {character.origin?.name}</h2>
            </div>
            <img src={character.image} alt={character.name} />
          </div>
        </div>
      ) : (
        alert("Este personaje no tiene detail")
      )}
    </div>
  );
}

export default Detail;
