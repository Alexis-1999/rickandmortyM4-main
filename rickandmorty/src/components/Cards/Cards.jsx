import Card from "../Card/Card";
import style from "./Cards.module.css"
// Importante usar acá una key cuando trabajamos con varios elementos, para identificar
// por id cada dato de la plantilla.

const Cards = ({characters}) => {
  return (
    <div className={style.cardsStyles}>
      {characters.map(({name, status, species, gender, origin, image, id}) => {
        return (
          <Card
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            key={id}
            id={id}
            onClose={() => window.alert('Emulamos que se cierra la card')}
          />
        );
      })}
    </div>
  );
}
export default Cards;