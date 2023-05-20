import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Player() {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const episodeURLs = data.episode;
          fetchEpisodeVideos(episodeURLs);
        } else {
          throw new Error("No hay episodios de este personaje");
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });

    return () => {
      setEpisodes([]);
    };
  }, [id]);

  const fetchEpisodeVideos = (episodeURLs) => {
    const episodeRequests = episodeURLs.map((url) => axios(url));
    Promise.all(episodeRequests)
      .then((responses) => {
        const episodeVideos = responses.map(
          (response) => response.data.video_url
        );
        setEpisodes(episodeVideos);
      })
      .catch((error) => {
        window.alert(
          "Error al obtener los videos de los episodios: " + error.message
        );
      });
  };

  return (
    <div>
      <h1>Episodes</h1>
      {episodes.map((episode, index) => (
        <div key={index}>
          <video controls autoPlay src={episode} />
        </div>
      ))}
    </div>
  );
}
