import Card from "../Card/Card";
import "./Cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards_container">
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => (
          <div key={id}>
            <Card
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={() => onClose(id)}
            />
          </div>
        )
      )}
    </div>
  );
}
