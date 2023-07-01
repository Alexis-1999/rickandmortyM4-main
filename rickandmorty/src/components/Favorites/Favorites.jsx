import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    
  return( 
    <div>
        {
        myFavorites.map(({name,status, species, gender, origin, image, id}, index)=>{
            return <Card
            key= {index}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            id={id}
            />
        })
        }

    </div>
    )
};

export default Favorites;
