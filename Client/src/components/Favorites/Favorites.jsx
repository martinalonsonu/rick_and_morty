import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import "./Favorites.css";

function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <div className="selectores">
        <select onChange={handleOrder}>
          <option value="order" disabled="disabled">
            Order By
          </option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="filter" disabled="disabled">
            Filter By
          </option>
          <option value="All">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="cards_container">
        {myFavorites.map(
          ({ id, name, status, species, gender, origin, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Favorites;
