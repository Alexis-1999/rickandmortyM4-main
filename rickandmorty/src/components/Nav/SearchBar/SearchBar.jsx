import React from "react";
import styles from "./Search.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('')
  const handleChange = (event)=>{
    setId(event.target.value)
  }
  const cleanInput = (event) => {
    onSearch(id);
    setId(" ");
 };
  return (
      <div className={styles.divS}>
        <input
          className={styles.inp}
          type="search"
          placeholder="Id del personaje"
          onChange={handleChange}
          value={id}
        />

        <button className={styles.boton1} onClick={() => cleanInput()}>
          Agregar
        </button>
      </div>
  );
}
