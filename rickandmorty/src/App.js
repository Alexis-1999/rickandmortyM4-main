import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState , useEffect} from "react";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import LoginForm from './components/Login/LoginForm'
import Favorites from './components/Favorites/Favorites'

// const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()

  
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const login = async (userData) => {
    try {
      const { username, password } = userData;
      
      const {data} = await axios(`http://localhost:3001/rickandmorty/login/?email=${username}&password=${password}`)
      const {access} = await data;
      
      setAccess(access);
      access && navigate('/home');
    } catch(error){
      console.log(error.message);
    }
 }

  const onSearch = async (id) => {
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        if(data.name){
          setCharacters((oldChars) => [...oldChars, data])
        }

    } catch(error){
      alert("¡No hay personajes con este ID!")
    }
  }

  return (
    <>
      <div className="App">
        {location.pathname !== '/' && <Nav onSearch={onSearch} />}
        
        <Routes>
            <Route exact path="/" element={<LoginForm login={login}/>}/>
          {/* El form está en About */}
            <Route path="/home" element={<Cards characters={characters} />}/>
            {/* <Route path="/about" element={<Form/>}/> */}
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
