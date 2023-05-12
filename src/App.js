import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const EMAIL = "admin@admin.com"
  const PASSWORD = "123456"

  const dispatch = useDispatch();


  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }

  const logOut = () => {
    setAccess(false)
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const { pathname } = useLocation()

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let exist = characters.find((character) => character.id === data.id);
          if (exist) {
            alert("¡El personaje ya ha sido ingresado!");
          } else if (!exist) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((element) => element.id !== Number(id)));
    dispatch(removeFav(id))
  };

  return (
    <div>
      <div>
        {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div >
    </div>
  );
}

export default App;
