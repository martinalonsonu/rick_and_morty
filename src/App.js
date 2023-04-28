import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom';
import Error404 from './components/Error404';


function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((character) => character.id === data.id)
            if (exist) {
               alert('¡El personaje ya ha sido ingresado!')
            } else if (!exist) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((element) => element.id !== Number(id)));
   }

   return (
      <div>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error404 />} />
            <Route path="/" element={<Navigate to='/home' />} />
         </Routes>
      </div>
   );
}

export default App;
