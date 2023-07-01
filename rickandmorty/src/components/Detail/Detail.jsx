import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE = 'https://be-a-rym-up.railway.app/api/character'
// const API_KEY = '921c53ed19ee.c07a3c34e20b05d4765f'

export default function Detail(){
    const { id } = useParams()

    const[character, setCharacter] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    

    return(
        <>
        <div>
            <h3>{character?.name}</h3>
            <h3>{character?.status}</h3>
            <h3>{character?.species}</h3>
            <h3>{character?.gender}</h3>
            <h3>{character?.origin?.name}</h3>
            <img src={character?.image} alt={character?.name}/>
        </div>
        <div>
            <button>
                <Link to='/home'>Home</Link>
            </button>
        </div>
        </>
        
    )
}