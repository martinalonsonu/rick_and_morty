import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Card.css";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({ id, name, status, species, gender, origin, image, onClose })
      );
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const { pathname } = useLocation();

  return (
    <div className="card">
      <div className="buttons">
        <Link to={`/detail/${id}`}>
          <button className="info_button">i</button>
        </Link>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {pathname !== "/favorites" && <button onClick={onClose}>X</button>}
      </div>
      <div className="img_container">
        <img src={image} alt={name} />
      </div>
      <div className="text_container">
        <h3>Name: {name}</h3>
        <p>Status: {status}</p>
        <p>Specie: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
      </div>
    </div>
  );
}

export default Card;
