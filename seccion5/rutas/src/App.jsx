import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Inicio from './components/Inicio';
import Base from './components/Base';
import Usuarios from './components/Usuarios';
import Perfil from './components/Perfil';

function App() {
  return (
    <Router>
      <Link to="/">Base</Link>
      <Link to="/inicio">Inicio</Link>
      <Link to="/usuarios">Usuarios</Link>
      <Routes>
        <Route path="/inicio/:nombre" element={<Inicio/>}/>
        <Route path='/usuario/:id' element={<Perfil/>}/>
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path="/" element={<Base/>}/>

      </Routes>
    </Router>
  );
}

export default App;
