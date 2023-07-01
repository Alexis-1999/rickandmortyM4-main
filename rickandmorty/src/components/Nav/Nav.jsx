import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import st from './Nav.module.css'


// const Nav1=styled.nav`

// border: 2px solid ligthgray; 
// display: flex;    
// flex-direction: row-reverse; 
// color: white;
// `

export default function Nav({ onSearch }) {
  return (
    <>
      <SearchBar onSearch={onSearch} />

      <div className={st.container}>
      <ul className={st.menu}>
                    <li>  <h2 className={st.h2}>Rick & Morty</h2></li>
                    <li ><NavLink to='/home' className={({isActive}) => (isActive ? st.active:st.disabled)} >Home </NavLink></li>
                    <li ><NavLink to='/favorites' className={({isActive}) => (isActive ? st.active:st.disabled)}>Favoritos </NavLink></li>
                    <li ><NavLink to='/about' className={({isActive}) => (isActive ? st.active:st.disabled)}>About </NavLink></li>
                   {/*/ <li ><NavLink to='/e' className={({isActive}) => (isActive ? st.active:st.disabled)} >Eror </NavLink></li>*/}
                    <li>
                        {/* <Nav1>           
                           <SearchBar  onSearch={onSearch} />
                        </Nav1> */}
                    </li>
                </ul>
      </div>
    </>
  );
}
