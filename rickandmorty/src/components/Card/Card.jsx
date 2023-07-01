import style from "./Card.module.css";
import { NavLink} from "react-router-dom";
import { addFav,removeFav } from "../../redux/actions";
import { useState, useEffect} from "react";
import { connect } from "react-redux";
// import { mapDispatchToProps, mapStateToProps } from "react-redux";
//Trae todas las propiedades que tendra cada una de las cards en cada llamado

function Card ({onClose, gender,status,name,species,origin,image,id, addFav, removeFav, myFavorites}) {
  

  const [isFav , setIsFav] = useState(false)

  const handleFavorite= () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id,gender, status,name,species,origin,image});
    }  
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);


  return (
    <div className={style.divCard}>

      <button onClick={handleFavorite}>{isFav ? <button className={style.classFavorite}>'❤️'</button>
        : <button className={style.classFavorite}>'🤍'</button>}
      </button>

      <button className={style.classBtn} onClick={onClose}>X</button>

      <img className={style.classImg} src={image} alt={name} />
      <NavLink to={`/detail/${id}`}>
        <div>
          <h2 className={style.className}>Nombre: {name}</h2>
          <h2 className={style.classH2}>Tipo: {species}</h2>
          <h2 className={style.classH2}>Origen: {origin}</h2>
        </div>
      </NavLink>
    </div>
  );

}

const mapStateToProps = (state)=>{
  return {
    myFavorites: state.myFavorites

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) => {dispatch(removeFav(id))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)