import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  return characters.map(
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
  );
}
