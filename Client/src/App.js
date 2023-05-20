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

    const dispatch = useDispatch();

    const [showForm, setShowForm] = useState(true);

    const login = async (userData) => {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const QUERY = `?email=${email}&password=${password}`
        try {
            const { data } = await axios(URL + QUERY)
            const { access } = data
            setAccess(data);
            access && navigate('/home');
            setShowForm(false)
        } catch (error) {
            return { error: error.message }
        }
    }

    const logOut = () => {
        setAccess(false)
        setShowForm(true)
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access, navigate]);

    const { pathname } = useLocation()

    const onSearch = async (id) => {
        const url = 'http://localhost:3001/rickandmorty/character/' + id
        try {
            const { data } = await axios(url)
            const exist = characters.find((character) => character.id === data?.id);
            if (data) {
                if (!exist) {
                    setCharacters((oldChars) => [...oldChars, data])
                } else {
                    alert("¡El personaje ya ha sido ingresado!");
                }
            } else {
                alert("¡No hay personajes con este ID!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const onClose = (id) => {
        setCharacters(characters.filter((element) => element.id !== id));
        dispatch(removeFav(id))
    };

    const random = () => {
        const number = Math.floor(Math.random() * 826) + 1
        onSearch(number)
    }

    return (
        <div className={`app-container ${showForm ? "with-form" : ""}`}>
            <div>
                {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} random={random} />}
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
